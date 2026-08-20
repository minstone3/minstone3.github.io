import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import anchorImage from '../assets/product-anchor.jpg'
import tagImage from '../assets/product-tag.jpg'
import dashboardImage from '../assets/product-dashboard.jpg'
import mobileImage from '../assets/sw-mobile.jpg'
import legacyImage from '../assets/sw-legacy.jpg'
import uiImage from '../assets/sw-ui.jpg'
import coreImage from '../assets/sw-core.jpg'
import dbImage from '../assets/sw-db.jpg'
import { useLanguage } from '../i18n/LanguageContext'

const productImages = [anchorImage, tagImage, dashboardImage]
const fieldImages = [anchorImage, tagImage, dashboardImage, mobileImage]

export default function Products() {
  const { t } = useLanguage()
  const { hash } = useLocation()
  const software = t.products.software
  const fieldAlts = [...t.products.items.map((item) => item.imageAlt), software.layers.field.mobileAlt]

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <section className="section" id="hardware" aria-labelledby="products-title">
        <div className="wrap">
          <div className="products-head">
            <p className="product-kicker mono">{t.products.kicker}</p>
            <h2 id="products-title">{t.products.title}</h2>
          </div>
          <div className="product-grid">
            {t.products.items.map((product, index) => (
              <article
                className={hash === `#${product.id}` ? 'product-card is-active' : 'product-card'}
                id={product.id}
                key={product.id}
              >
                <figure className="product-card-image">
                  <img src={productImages[index]} alt={product.imageAlt} />
                </figure>
                <h3>{product.title}</h3>
                <dl className="product-specs">
                  {product.specs.map((spec) => (
                    <div className="product-spec" key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="software" aria-labelledby="software-title">
        <div className="wrap">
          <div className="products-head">
            <p className="product-kicker mono">{software.kicker}</p>
            <h2 id="software-title">{software.title}</h2>
            <p className="section-intro software-intro">{software.intro}</p>
          </div>

          <div className="soft-arch">
            <div className="soft-arch-layer">
              <p className="soft-arch-label mono">{software.layers.legacy.title}</p>
              <figure className="soft-arch-visual">
                <img src={legacyImage} alt={software.layers.legacy.imageAlt} />
              </figure>
              <div className="soft-arch-row soft-arch-row-4">
                {software.layers.legacy.items.map((item) => (
                  <div className="soft-arch-box" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-arch-mid">
              <div className="soft-arch-layer">
                <p className="soft-arch-label mono">{software.layers.ui.title}</p>
                <figure className="soft-arch-visual is-tall">
                  <img src={uiImage} alt={software.layers.ui.imageAlt} />
                </figure>
                <div className="soft-arch-stack">
                  {software.layers.ui.items.map((item) => (
                    <div className="soft-arch-box is-ui" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="soft-arch-layer">
                <p className="soft-arch-label mono">{software.layers.core.title}</p>
                <figure className="soft-arch-visual is-tall">
                  <img src={coreImage} alt={software.layers.core.imageAlt} />
                </figure>
                <div className="soft-arch-core">
                  {software.layers.core.items.map((item) => (
                    <div
                      className={item.tone ? `soft-arch-box is-${item.tone}` : 'soft-arch-box'}
                      key={item.name}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="soft-arch-layer">
                <p className="soft-arch-label mono">{software.layers.database.title}</p>
                <div className="soft-arch-box is-db">
                  <figure className="soft-arch-visual is-tall">
                    <img src={dbImage} alt={software.layers.database.imageAlt} />
                  </figure>
                  <strong>{software.layers.database.name}</strong>
                  <span>{software.layers.database.note}</span>
                </div>
              </div>
            </div>

            <div className="soft-arch-layer">
              <p className="soft-arch-label mono">{software.layers.field.title}</p>
              <div className="soft-arch-row soft-arch-row-4">
                {software.layers.field.items.map((item, index) => (
                  <div className="soft-arch-box is-field" key={item}>
                    <figure className="soft-arch-thumb">
                      <img src={fieldImages[index]} alt={fieldAlts[index]} />
                    </figure>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="soft-detail">
            <p className="product-kicker mono">{software.detail.kicker}</p>
            <h3>{software.detail.title}</h3>
            <p className="soft-detail-lead">{software.detail.lead}</p>
            <div className="soft-detail-grid">
              {software.detail.items.map((item) => (
                <article className="soft-detail-item" key={item.number}>
                  <span className="mono">{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
