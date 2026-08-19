import { copyFileSync, cpSync, existsSync, rmSync, writeFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')

if (existsSync('assets')) {
  rmSync('assets', { recursive: true, force: true })
}

cpSync('dist/assets', 'assets', { recursive: true })
copyFileSync('dist/index.html', 'index.html')
copyFileSync('dist/404.html', '404.html')
writeFileSync('.nojekyll', '')
