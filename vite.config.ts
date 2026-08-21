import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { timingSafeEqual } from 'node:crypto'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const FALLBACK_HASH = 'bb34f33ac8644538733997c49ca3fd3b17b8782cc18daa06936bbec8eb6950f3'

function hashesMatch(left: string, right: string) {
  const a = Buffer.from(left)
  const b = Buffer.from(right)
  return a.length === b.length && timingSafeEqual(a, b)
}

function newsBoardPlugin(adminHash: string): Plugin {
  const root = dirname(fileURLToPath(import.meta.url))
  const newsFile = resolve(root, 'public/news.json')
  const mediaDir = resolve(root, 'public/news-media')
  const mimeExt: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'image/avif': 'avif',
    'video/mp4': 'mp4',
    'video/webm': 'webm',
  }

  function unauthorized(res: { statusCode: number; setHeader: (k: string, v: string) => void; end: (b: string) => void }) {
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: false, error: 'unauthorized' }))
  }

  function readBody(req: { on: (event: string, fn: (chunk?: Buffer | string) => void) => void }) {
    return new Promise<Buffer>((resolvePromise, reject) => {
      const chunks: Buffer[] = []
      req.on('data', (chunk) => {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk ?? ''))
      })
      req.on('end', () => resolvePromise(Buffer.concat(chunks)))
      req.on('error', reject)
    })
  }

  return {
    name: 'oaxis-news-board',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0]
        if (req.method !== 'POST' || (path !== '/api/news' && path !== '/api/news-media')) {
          next()
          return
        }

        const token = String(req.headers['x-news-admin'] ?? '')
        if (!hashesMatch(token, adminHash)) {
          unauthorized(res)
          return
        }

        void (async () => {
          try {
            const raw = await readBody(req)
            if (path === '/api/news-media') {
              const parsed = JSON.parse(raw.toString('utf8')) as { name?: string; mime?: string; data?: string }
              const ext = mimeExt[parsed.mime ?? '']
              if (!ext || !parsed.data) throw new Error('invalid media')
              const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
              mkdirSync(mediaDir, { recursive: true })
              writeFileSync(resolve(mediaDir, fileName), Buffer.from(parsed.data, 'base64'))
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true, url: `/news-media/${fileName}` }))
              return
            }

            const parsed = JSON.parse(raw.toString('utf8')) as unknown
            if (!Array.isArray(parsed)) throw new Error('invalid news payload')
            mkdirSync(dirname(newsFile), { recursive: true })
            writeFileSync(newsFile, `${JSON.stringify(parsed, null, 2)}\n`)
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false }))
          }
        })()
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, dirname(fileURLToPath(import.meta.url)), '')
  const adminHash = env.VITE_NEWS_ADMIN_HASH?.trim() || FALLBACK_HASH

  return {
    root: 'app',
    publicDir: '../public',
    plugins: [react(), newsBoardPlugin(adminHash)],
    base: '/',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
  }
})
