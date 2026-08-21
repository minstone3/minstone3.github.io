import type { Language, Messages } from '../i18n/messages'
import type { NewsPost } from './news'
import { youtubeId } from './newsMedia'

export type RelatedItem = {
  to: string
  kicker: string
  title: string
  description: string
  image?: string
  kind: 'news' | 'page'
}

const STOP = new Set([
  'and',
  'are',
  'for',
  'from',
  'into',
  'its',
  'one',
  'the',
  'this',
  'that',
  'with',
  '있는',
  '없는',
  '하는',
  '하여',
  '에서',
  '으로',
  '통해',
  '대한',
  '위한',
  '그리고',
  '또는',
  '있습니다',
  '합니다',
  '입니다',
])

function tokens(text: string) {
  const found = text.toLowerCase().match(/[a-z0-9+]{2,}|[가-힣]{2,}/g) ?? []
  return new Set(found.filter((token) => !STOP.has(token)))
}

function postText(post: NewsPost) {
  return [
    post.category,
    post.title.ko,
    post.title.en,
    post.body.ko,
    post.body.en,
    ...(post.media ?? []).map((item) => item.caption ?? ''),
  ].join(' ')
}

function overlap(left: Set<string>, right: Set<string>) {
  let score = 0
  for (const token of left) {
    if (right.has(token)) score += 1
  }
  return score
}

export function newsThumb(post: NewsPost) {
  const image = post.media?.find((item) => item.kind === 'image')
  if (image) return image.src
  const embed = post.media?.find((item) => item.kind === 'embed')
  const youtube = embed ? youtubeId(embed.src) : ''
  if (youtube) return `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`
  return undefined
}

function excerpt(post: NewsPost, lang: Language) {
  return post.body[lang].split(/\n+/).find(Boolean)?.slice(0, 90) ?? ''
}

type PageSeed = {
  to: string
  imageKey: 'technology' | 'hardware' | 'software' | 'anchor' | 'tag' | 'dashboard' | 'solutions' | 'company'
  keywords: string[]
  kicker: (t: Messages) => string
  title: (t: Messages) => string
  description: (t: Messages) => string
}

const PAGE_SEEDS: PageSeed[] = [
  {
    to: '/technology',
    imageKey: 'technology',
    keywords: ['uwb', 'rtls', '위치', '측위', '아키텍처', '정밀', 'nlos', 'ai', '로케이터', '기술'],
    kicker: (t) => t.nav.technology,
    title: (t) => t.technology.title.join(' '),
    description: (t) => t.technology.intro,
  },
  {
    to: '/products#hardware',
    imageKey: 'hardware',
    keywords: ['하드웨어', 'hardware', '앵커', '태그', '대시보드', '제품'],
    kicker: (t) => t.nav.hardware,
    title: (t) => t.products.title,
    description: (t) => t.products.items.map((item) => item.title).join(' · '),
  },
  {
    to: '/products#software',
    imageKey: 'software',
    keywords: ['소프트웨어', 'software', '엔진', 'mongodb', 'api', '파이프라인', '플랫폼'],
    kicker: (t) => t.nav.software,
    title: (t) => t.products.software.title,
    description: (t) => t.products.software.intro,
  },
  {
    to: '/products#anchor',
    imageKey: 'anchor',
    keywords: ['앵커', 'anchor', '게이트웨이', 'locator', '로케이터', 'uwb'],
    kicker: (t) => t.nav.hardware,
    title: (t) => t.products.items[0].title,
    description: (t) => t.products.items[0].imageAlt,
  },
  {
    to: '/products#tag',
    imageKey: 'tag',
    keywords: ['태그', 'tag', 'e-paper', 'epaper', '디스플레이'],
    kicker: (t) => t.nav.hardware,
    title: (t) => t.products.items[1].title,
    description: (t) => t.products.items[1].imageAlt,
  },
  {
    to: '/products#dashboard',
    imageKey: 'dashboard',
    keywords: ['대시보드', 'dashboard', '3d', '지도', '관제'],
    kicker: (t) => t.nav.hardware,
    title: (t) => t.products.items[2].title,
    description: (t) => t.products.items[2].imageAlt,
  },
  {
    to: '/solutions',
    imageKey: 'solutions',
    keywords: ['물류', '제조', '리테일', '헬스케어', 'wms', 'mes', 'agv', 'amr', '솔루션', '현장'],
    kicker: (t) => t.nav.solutions,
    title: (t) => t.solutions.title.join(' '),
    description: (t) => t.solutions.intro,
  },
  {
    to: '/company',
    imageKey: 'company',
    keywords: ['회사', '홈페이지', '오아식스', 'oaxis', '파트너십', '소개'],
    kicker: (t) => t.nav.company,
    title: (t) => t.company.title.join(' '),
    description: (t) => t.company.intro,
  },
]

export function relatedItems(
  post: NewsPost,
  posts: NewsPost[],
  t: Messages,
  lang: Language,
  images: Record<PageSeed['imageKey'], string>,
): RelatedItem[] {
  const source = tokens(postText(post))

  const news = posts
    .filter((item) => item.id !== post.id)
    .map((item) => ({
      item,
      score: overlap(source, tokens(postText(item))) + (item.category === post.category ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score || b.item.date.localeCompare(a.item.date))
    .slice(0, 3)
    .map(({ item }) => ({
      to: `/news/${item.id}`,
      kicker: t.news.categories[item.category],
      title: item.title[lang],
      description: excerpt(item, lang),
      image: newsThumb(item),
      kind: 'news' as const,
    }))

  const pages = PAGE_SEEDS.map((page) => ({
    page,
    score: overlap(source, new Set(page.keywords)),
  }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ page }) => ({
      to: page.to,
      kicker: page.kicker(t),
      title: page.title(t),
      description: page.description(t),
      image: images[page.imageKey],
      kind: 'page' as const,
    }))

  const merged: RelatedItem[] = []
  const seen = new Set<string>()
  for (const item of [...news, ...pages]) {
    if (seen.has(item.to)) continue
    seen.add(item.to)
    merged.push(item)
    if (merged.length === 4) break
  }
  return merged
}
