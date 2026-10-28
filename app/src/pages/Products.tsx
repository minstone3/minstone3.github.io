import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import anchorImage from '../assets/product-anchor.jpg'
import tagImage from '../assets/product-tag.jpg'
import dashboardImage from '../assets/product-dashboard.jpg'
import cartStandardImage from '../assets/robot-cart-standard.jpeg'
import cartDisplayImage from '../assets/robot-cart-display.jpg'
import robotImsImage from '../assets/robot-ims.png'
import robotKioskImage from '../assets/robot-kiosk.png'
import { useLanguage } from '../i18n/LanguageContext'

const productImages = [anchorImage, tagImage, dashboardImage]
const cartImages = [cartStandardImage, cartDisplayImage]
const robotSoftwareImages = [robotImsImage, robotKioskImage]

export default function Products() {
  const { t } = useLanguage()
  const { hash } = useLocation()
  const software = t.products.software

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
                className={
                  product.id === 'cart'
                    ? hash === `#${product.id}`
                      ? 'product-card is-wide is-active'
                      : 'product-card is-wide'
                    : hash === `#${product.id}`
                      ? 'product-card is-active'
                      : 'product-card'
                }
                id={product.id}
                key={product.id}
              >
                {product.views ? (
                  <div className="product-shots">
                    {product.views.map((view, viewIndex) => (
                      <figure className="product-shot" key={view.label}>
                        <img src={cartImages[viewIndex]} alt={view.imageAlt} />
                        <figcaption>{view.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <figure className="product-card-image">
                    <img src={productImages[index]} alt={product.imageAlt} />
                  </figure>
                )}
                <div className="product-card-body">
                  <h3>{product.title}</h3>
                  <dl className="product-specs">
                    {product.specs.map((spec) => (
                      <div className="product-spec" key={spec.label}>
                        <dt>{spec.label}</dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {product.note ? <p className="product-note">{product.note}</p> : null}
                </div>
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

          <div className="soft-detail" id="software-system">
            <p className="product-kicker mono">{software.system.kicker}</p>
            <h3>{software.system.title}</h3>
            <p className="soft-detail-lead">{software.system.intro}</p>
            <p className="sys-flow mono">
              <span>{software.system.down}</span>
              <span>{software.system.up}</span>
            </p>
            <div className="sys-arch">
              {software.system.layers.map((layer) => (
                <article className="sys-layer" key={layer.number}>
                  <div className="sys-layer-head">
                    <span className="mono">{layer.number}</span>
                    <strong>{layer.title}</strong>
                  </div>
                  <div className={`sys-row sys-row-${layer.items.length}`}>
                    {layer.items.map((item) => (
                      <div className="sys-box" key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            {software.system.foot ? <p className="sys-foot">{software.system.foot}</p> : null}
          </div>

          <div className="soft-detail" id="software-robot">
            <p className="product-kicker mono">{software.robot.kicker}</p>
            <h3>{software.robot.title}</h3>
            <p className="soft-detail-lead">{software.robot.intro}</p>
            <div className="soft-detail-grid">
              {software.robot.items.map((item, index) => (
                <article className="soft-detail-item" key={item.title}>
                  <div className="soft-detail-copy">
                    <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <figure className="soft-detail-image is-ui">
                    <img src={robotSoftwareImages[index]} alt={item.imageAlt} />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
