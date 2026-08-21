import { getNewsAdminToken, isNewsAdmin } from './newsAuth'

export type NewsMediaKind = 'image' | 'video' | 'embed'

export type NewsMediaItem = {
  id: string
  kind: NewsMediaKind
  src: string
  caption?: string
}

const YOUTUBE_RE =
  /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/i
const VIMEO_RE = /(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/i

export function isNewsMediaItem(value: unknown): value is NewsMediaItem {
  if (!value || typeof value !== 'object') return false
  const item = value as NewsMediaItem
  return (
    typeof item.id === 'string' &&
    (item.kind === 'image' || item.kind === 'video' || item.kind === 'embed') &&
    typeof item.src === 'string' &&
    (item.caption === undefined || typeof item.caption === 'string')
  )
}

export function youtubeId(src: string) {
  return src.match(YOUTUBE_RE)?.[1] ?? ''
}

export function vimeoId(src: string) {
  return src.match(VIMEO_RE)?.[1] ?? ''
}

export function embedSrc(src: string) {
  const youtube = youtubeId(src)
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube}`
  const vimeo = vimeoId(src)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo}`
  if (src.includes('youtube.com/embed/') || src.includes('player.vimeo.com/')) return src
  return ''
}

export function detectNewsMediaKind(src: string): NewsMediaKind | null {
  const value = src.trim()
  if (!value) return null
  if (youtubeId(value) || vimeoId(value) || embedSrc(value)) return 'embed'
  if (value.startsWith('data:image/') || /\.(avif|gif|jpe?g|png|webp)(?:$|\?)/i.test(value)) return 'image'
  if (value.startsWith('data:video/') || /\.(mp4|webm|ogg)(?:$|\?)/i.test(value)) return 'video'
  if (/^https?:\/\//i.test(value)) return 'image'
  return null
}

export function createMediaItem(src: string, caption = ''): NewsMediaItem | null {
  const kind = detectNewsMediaKind(src)
  if (!kind) return null
  return {
    id: `m-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    kind,
    src: src.trim(),
    caption: caption.trim() || undefined,
  }
}

function readAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export async function uploadNewsMedia(file: File, caption = ''): Promise<NewsMediaItem> {
  if (!isNewsAdmin()) throw new Error('forbidden')

  const kind: NewsMediaKind = file.type.startsWith('video/') ? 'video' : 'image'
  const dataUrl = await readAsDataUrl(file)
  const base64 = dataUrl.split(',')[1] ?? ''

  try {
    const response = await fetch('/api/news-media', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-news-admin': getNewsAdminToken(),
      },
      body: JSON.stringify({
        name: file.name,
        mime: file.type,
        data: base64,
      }),
    })
    if (response.status === 401) throw new Error('forbidden')
    if (response.ok) {
      const payload = (await response.json()) as { url?: string }
      if (payload.url) {
        return {
          id: `m-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          kind,
          src: payload.url,
          caption: caption.trim() || undefined,
        }
      }
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'forbidden') throw error
  }

  if (kind === 'image' && file.size <= 2_000_000) {
    return {
      id: `m-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      kind,
      src: dataUrl,
      caption: caption.trim() || undefined,
    }
  }

  throw new Error('upload-failed')
}
