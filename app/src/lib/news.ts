import { getNewsAdminToken, isNewsAdmin } from './newsAuth'
import { isNewsMediaItem, type NewsMediaItem } from './newsMedia'

export type NewsCategory = 'notice' | 'news' | 'media'

export type LocalizedText = { ko: string; en: string }

export type NewsPost = {
  id: string
  date: string
  category: NewsCategory
  title: LocalizedText
  body: LocalizedText
  media?: NewsMediaItem[]
}

const STORAGE_KEY = 'oaxis-news'
const NEWS_URL = '/news.json'
const NEWS_API = '/api/news'

function isPost(value: unknown): value is NewsPost {
  if (!value || typeof value !== 'object') return false
  const post = value as NewsPost
  return (
    typeof post.id === 'string' &&
    typeof post.date === 'string' &&
    (post.category === 'notice' || post.category === 'news' || post.category === 'media') &&
    typeof post.title?.ko === 'string' &&
    typeof post.title?.en === 'string' &&
    typeof post.body?.ko === 'string' &&
    typeof post.body?.en === 'string' &&
    (post.media === undefined || (Array.isArray(post.media) && post.media.every(isNewsMediaItem)))
  )
}

function readLocal(): NewsPost[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter(isPost) : []
  } catch {
    return []
  }
}

function mergePosts(published: NewsPost[], local: NewsPost[]) {
  const map = new Map<string, NewsPost>()
  for (const post of published) map.set(post.id, post)
  for (const post of local) map.set(post.id, post)
  return [...map.values()].sort((a, b) => (a.date === b.date ? b.id.localeCompare(a.id) : b.date.localeCompare(a.date)))
}

export async function loadNews(): Promise<NewsPost[]> {
  let published: NewsPost[] = []
  try {
    const response = await fetch(NEWS_URL, { cache: 'no-store' })
    if (response.ok) {
      const parsed = (await response.json()) as unknown
      published = Array.isArray(parsed) ? parsed.filter(isPost) : []
    }
  } catch {
    published = []
  }
  if (!isNewsAdmin()) return mergePosts(published, [])
  return mergePosts(published, readLocal())
}

export async function saveNews(posts: NewsPost[]) {
  if (!isNewsAdmin()) {
    throw new Error('forbidden')
  }
  const next = mergePosts(posts, [])
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  try {
    const response = await fetch(NEWS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-news-admin': getNewsAdminToken(),
      },
      body: JSON.stringify(next),
    })
    if (response.status === 401) throw new Error('forbidden')
  } catch (error) {
    if (error instanceof Error && error.message === 'forbidden') throw error
  }
  return next
}

export function createNewsId() {
  return `n-${Date.now()}`
}

export function formatNewsDate(date: string, lang: 'ko' | 'en') {
  const [year, month, day] = date.split('-')
  if (!year || !month || !day) return date
  return lang === 'ko' ? `${year}.${month}.${day}` : `${year}-${month}-${day}`
}
