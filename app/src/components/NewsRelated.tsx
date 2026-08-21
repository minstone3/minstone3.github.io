import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import type { RelatedItem } from '../lib/newsRelated'

export default function NewsRelated({ items }: { items: RelatedItem[] }) {
  const { t } = useLanguage()
  if (items.length === 0) return null

  return (
    <aside className="news-related" aria-labelledby="news-related-title">
      <p className="product-kicker mono">{t.news.relatedKicker}</p>
      <h3 id="news-related-title">{t.news.related}</h3>
      <div className="news-related-grid">
        {items.map((item) => (
          <Link className="news-related-card" to={item.to} key={item.to}>
            {item.image ? (
              <figure className="news-related-image">
                <img src={item.image} alt="" />
              </figure>
            ) : (
              <div className="news-related-image is-empty" />
            )}
            <div className="news-related-copy">
              <span className="mono">{item.kicker}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
