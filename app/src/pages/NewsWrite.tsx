import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { createNewsId, loadNews, saveNews, type NewsCategory } from '../lib/news'
import { createMediaItem, uploadNewsMedia, type NewsMediaItem } from '../lib/newsMedia'

const today = () => new Date().toISOString().slice(0, 10)

export default function NewsWrite() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [category, setCategory] = useState<NewsCategory>('news')
  const [date, setDate] = useState(today)
  const [titleKo, setTitleKo] = useState('')
  const [titleEn, setTitleEn] = useState('')
  const [bodyKo, setBodyKo] = useState('')
  const [bodyEn, setBodyEn] = useState('')
  const [media, setMedia] = useState<NewsMediaItem[]>([])
  const [mediaUrl, setMediaUrl] = useState('')
  const [mediaCaption, setMediaCaption] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  function addMediaFromUrl() {
    const item = createMediaItem(mediaUrl, mediaCaption)
    if (!item) {
      setError(t.news.form.mediaInvalid)
      return
    }
    setMedia((current) => [...current, item])
    setMediaUrl('')
    setMediaCaption('')
    setError('')
  }

  async function addMediaFromFile(file: File | undefined) {
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const item = await uploadNewsMedia(file, mediaCaption)
      setMedia((current) => [...current, item])
      setMediaCaption('')
    } catch (caught) {
      setError(caught instanceof Error && caught.message === 'forbidden' ? t.news.forbidden : t.news.form.mediaError)
    } finally {
      setUploading(false)
    }
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    const title = titleKo.trim()
    const body = bodyKo.trim()
    if (!title || !body) {
      setError(t.news.required)
      return
    }

    setSaving(true)
    try {
      const posts = await loadNews()
      const id = createNewsId()
      await saveNews([
        {
          id,
          date,
          category,
          title: { ko: title, en: titleEn.trim() || title },
          body: { ko: body, en: bodyEn.trim() || body },
          media: media.length ? media : undefined,
        },
        ...posts,
      ])
      navigate(`/news/${id}`)
    } catch {
      setSaving(false)
      setError(t.news.forbidden)
    }
  }

  return (
    <section className="section page-fill" aria-labelledby="news-write-title">
      <div className="wrap">
        <p className="product-kicker mono">{t.news.kicker}</p>
        <h2 id="news-write-title">{t.news.writeTitle}</h2>
        <p className="section-intro software-intro">{t.news.writeIntro}</p>

        <form className="news-form" onSubmit={onSubmit}>
          <div className="news-form-row">
            <label>
              {t.news.form.category}
              <select value={category} onChange={(event) => setCategory(event.target.value as NewsCategory)}>
                <option value="notice">{t.news.categories.notice}</option>
                <option value="news">{t.news.categories.news}</option>
                <option value="media">{t.news.categories.media}</option>
              </select>
            </label>
            <label>
              {t.news.form.date}
              <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
            </label>
          </div>
          <label>
            {t.news.form.title}
            <input value={titleKo} onChange={(event) => setTitleKo(event.target.value)} required />
          </label>
          <label>
            {t.news.form.titleEn}
            <input value={titleEn} onChange={(event) => setTitleEn(event.target.value)} />
          </label>
          <label>
            {t.news.form.body}
            <textarea rows={8} value={bodyKo} onChange={(event) => setBodyKo(event.target.value)} required />
          </label>
          <label>
            {t.news.form.bodyEn}
            <textarea rows={6} value={bodyEn} onChange={(event) => setBodyEn(event.target.value)} />
          </label>

          <fieldset className="news-media-fields">
            <legend>{t.news.form.media}</legend>
            <p className="news-media-hint">{t.news.form.mediaHint}</p>
            <label>
              {t.news.form.mediaUrl}
              <input
                value={mediaUrl}
                onChange={(event) => setMediaUrl(event.target.value)}
                placeholder="https://"
              />
            </label>
            <label>
              {t.news.form.mediaCaption}
              <input value={mediaCaption} onChange={(event) => setMediaCaption(event.target.value)} />
            </label>
            <div className="news-media-tools">
              <button type="button" className="news-media-add" onClick={addMediaFromUrl}>
                {t.news.form.mediaAdd}
              </button>
              <label className="news-media-file">
                {t.news.form.mediaFile}
                <input
                  type="file"
                  accept="image/*,video/mp4,video/webm"
                  disabled={uploading}
                  onChange={(event) => {
                    void addMediaFromFile(event.target.files?.[0])
                    event.target.value = ''
                  }}
                />
              </label>
            </div>
            {media.length > 0 ? (
              <ul className="news-media-draft">
                {media.map((item) => (
                  <li key={item.id}>
                    <span className="mono">{item.kind}</span>
                    <strong>{item.caption || item.src}</strong>
                    <button
                      type="button"
                      className="news-delete"
                      onClick={() => setMedia((current) => current.filter((entry) => entry.id !== item.id))}
                    >
                      {t.news.form.mediaRemove}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </fieldset>

          {error ? <p className="news-error">{error}</p> : null}
          <div className="news-actions">
            <button className="button" type="submit" disabled={saving || uploading}>
              {t.news.form.submit}
            </button>
            <Link className="news-back" to="/news">
              {t.news.form.cancel}
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
