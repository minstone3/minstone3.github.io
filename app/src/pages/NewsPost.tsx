import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import NewsMedia from '../components/NewsMedia'
import NewsRelated from '../components/NewsRelated'
import { useNewsAdmin } from '../components/RequireNewsAdmin'
import { formatNewsDate, loadNews, saveNews, type NewsPost } from '../lib/news'
import { relatedItems } from '../lib/newsRelated'
import companyImage from '../assets/company-factory.jpg'
import dashboardImage from '../assets/product-dashboard.jpg'
import tagImage from '../assets/product-tag.jpg'
import anchorImage from '../assets/product-anchor.jpg'
import softwareImage from '../assets/sw-ui.jpg'
import hardwareImage from '../assets/diff-onestop.jpg'
import technologyImage from '../assets/diff-precision.jpg'
import solutionsImage from '../assets/industry-logistics.png'

const relatedImages = {
  technology: technologyImage,
  hardware: hardwareImage,
  software: softwareImage,
  anchor: anchorImage,
  tag: tagImage,
  dashboard: dashboardImage,
  solutions: solutionsImage,
  company: companyImage,
}

export default function NewsPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { lang, t } = useLanguage()
  const admin = useNewsAdmin()
  const [posts, setPosts] = useState<NewsPost[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    loadNews().then((next) => {
      setPosts(next)
      setReady(true)
    })
  }, [id, admin])

  const post = posts.find((item) => item.id === id) ?? null
  const related = useMemo(
    () => (post ? relatedItems(post, posts, t, lang, relatedImages) : []),
    [post, posts, t, lang],
  )

  async function onDelete() {
    if (!admin || !post || !window.confirm(t.news.confirmDelete)) return
    try {
      const posts = await loadNews()
      await saveNews(posts.filter((item) => item.id !== post.id))
      navigate('/news')
    } catch {
      window.alert(t.news.forbidden)
    }
  }

  if (!ready) {
    return (
      <section className="section page-fill">
        <div className="wrap">
          <p className="news-empty">{t.news.loading}</p>
        </div>
      </section>
    )
  }

  if (!post) {
    return (
      <section className="section page-fill">
        <div className="wrap">
          <p className="news-empty">{t.news.missing}</p>
          <Link className="news-back" to="/news">
            {t.news.back}
          </Link>
        </div>
      </section>
    )
  }

  const paragraphs = post.body[lang].split(/\n+/).filter(Boolean)

  return (
    <section className="section page-fill" aria-labelledby="news-post-title">
      <div className="wrap news-article">
        <p className="product-kicker mono">{t.news.categories[post.category]}</p>
        <h2 id="news-post-title">{post.title[lang]}</h2>
        <time className="news-date mono" dateTime={post.date}>
          {formatNewsDate(post.date, lang)}
        </time>
        <div className="news-body">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <NewsMedia items={post.media ?? []} />
        <div className="news-actions">
          <Link className="news-back" to="/news">
            {t.news.back}
          </Link>
          {admin ? (
            <button type="button" className="news-delete" onClick={onDelete}>
              {t.news.remove}
            </button>
          ) : null}
        </div>
        <NewsRelated items={related} />
      </div>
    </section>
  )
}
