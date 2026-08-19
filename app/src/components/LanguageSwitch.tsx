import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      <button type="button" className={lang === 'ko' ? 'active' : undefined} onClick={() => setLang('ko')} aria-pressed={lang === 'ko'}>
        KO
      </button>
      <span className="lang-switch-sep">/</span>
      <button type="button" className={lang === 'en' ? 'active' : undefined} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
        EN
      </button>
    </div>
  )
}
