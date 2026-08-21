import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNewsAdmin } from '../components/RequireNewsAdmin'
import { useLanguage } from '../i18n/LanguageContext'
import { formatNewsDate, loadNews, type NewsPost } from '../lib/news'
import { logoutNewsAdmin } from '../lib/newsAuth'

export default function News() {
  const { lang, t } = useLanguage()
  const admin = useNewsAdmin()
  const [posts, setPosts] = useState<NewsPost[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    loadNews().then((next) => {
      setPosts(next)
      setReady(true)
    })
  }, [admin])

  return (
    <section className="section page-fill" aria-labelledby="news-title">
      <div className="wrap">
        <div className="news-head">
          <div>
            <p className="product-kicker mono">{t.news.kicker}</p>
            <h2 id="news-title">{t.news.title}</h2>
            <p className="section-intro software-intro">{t.news.intro}</p>
          </div>
          {admin ? (
            <div className="news-admin-actions">
              <Link className="button news-write-btn" to="/news/write">
                {t.news.write}
              </Link>
              <button type="button" className="news-delete" onClick={logoutNewsAdmin}>
                {t.news.logout}
              </button>
            </div>
          ) : null}
        </div>

        <div className="news-board">
          <div className="news-row news-row-head mono">
            <span>{t.news.columns.no}</span>
            <span>{t.news.columns.category}</span>
            <span>{t.news.columns.title}</span>
            <span>{t.news.columns.date}</span>
          </div>
          {!ready ? (
            <p className="news-empty">{t.news.loading}</p>
          ) : posts.length === 0 ? (
            <p className="news-empty">{t.news.empty}</p>
          ) : (
            posts.map((post, index) => (
              <Link className="news-row" to={`/news/${post.id}`} key={post.id}>
                <span className="mono">{String(posts.length - index).padStart(2, '0')}</span>
                <span className="news-cat">{t.news.categories[post.category]}</span>
                <strong>
                  {post.title[lang]}
                  {post.media?.length ? <span className="news-media-mark" aria-hidden="true" /> : null}
                </strong>
                <time dateTime={post.date}>{formatNewsDate(post.date, lang)}</time>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
