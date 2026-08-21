import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { isNewsAdmin, loginNewsAdmin } from '../lib/newsAuth'

export default function NewsLogin() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const from = (location.state as { from?: string } | null)?.from || '/news'

  if (isNewsAdmin()) {
    return <Navigate to={from === '/news/login' ? '/news' : from} replace />
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    const ok = await loginNewsAdmin(password)
    if (!ok) {
      setError(t.news.loginError)
      return
    }
    navigate(from === '/news/login' ? '/news' : from, { replace: true })
  }

  return (
    <section className="section page-fill" aria-labelledby="news-login-title">
      <div className="wrap">
        <p className="product-kicker mono">{t.news.kicker}</p>
        <h2 id="news-login-title">{t.news.loginTitle}</h2>
        <p className="section-intro software-intro">{t.news.loginIntro}</p>
        <form className="news-form" onSubmit={onSubmit}>
          <label>
            {t.news.password}
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error ? <p className="news-error">{error}</p> : null}
          <div className="news-actions">
            <button className="button" type="submit">
              {t.news.loginSubmit}
            </button>
            <Link className="news-back" to="/news">
              {t.news.back}
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
