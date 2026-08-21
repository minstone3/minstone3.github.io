/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEWS_ADMIN_HASH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

