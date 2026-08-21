import { copyFileSync, cpSync, existsSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

copyFileSync('dist/index.html', 'dist/404.html')

if (existsSync('assets')) {
  rmSync('assets', { recursive: true, force: true })
}

cpSync('dist/assets', 'assets', { recursive: true })
copyFileSync('dist/index.html', 'index.html')
copyFileSync('dist/404.html', '404.html')
writeFileSync('.nojekyll', '')

for (const name of readdirSync('dist')) {
  if (name === 'assets' || name === 'index.html' || name === '404.html') continue
  const src = join('dist', name)
  if (statSync(src).isDirectory()) {
    if (existsSync(name)) rmSync(name, { recursive: true, force: true })
    cpSync(src, name, { recursive: true })
    continue
  }
  copyFileSync(src, name)
}
