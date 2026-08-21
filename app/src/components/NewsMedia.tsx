import { embedSrc, type NewsMediaItem } from '../lib/newsMedia'

export default function NewsMedia({ items }: { items: NewsMediaItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="news-media">
      {items.map((item) => {
        const caption = item.caption?.trim()
        const frame = embedSrc(item.src)
        return (
          <figure className="news-media-item" key={item.id}>
            {item.kind === 'image' ? (
              <img src={item.src} alt={caption || ''} />
            ) : null}
            {item.kind === 'video' ? (
              <video src={item.src} controls playsInline preload="metadata" />
            ) : null}
            {item.kind === 'embed' && frame ? (
              <div className="news-media-frame">
                <iframe
                  src={frame}
                  title={caption || 'News video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
            {caption ? <figcaption>{caption}</figcaption> : null}
          </figure>
        )
      })}
    </div>
  )
}
