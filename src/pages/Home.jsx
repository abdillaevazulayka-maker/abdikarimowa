import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, UtensilsCrossed, BedDouble, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import FAQAccordion from '../components/FAQAccordion'
import ContactForm from '../components/ContactForm'
import homeData from '../data/home.json'
import faqData from '../data/faq.json'
import site from '../data/site.json'

const iconMap = {
  BookOpen,
  BedDouble,
  UtensilsCrossed,
  ShieldCheck,
  GraduationCap,
  MapPin,
}

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{homeData.hero.eyebrow}</span>
            <h1>{homeData.hero.title}</h1>
            <p className="hero-subtitle">{homeData.hero.subtitle}</p>
            <p className="hero-description">{homeData.hero.description}</p>
            <div className="hero-actions">
              <Button to="/about">{homeData.hero.primaryButton} <ArrowRight size={18} /></Button>
              <Button to="/contacts" variant="secondary">{homeData.hero.secondaryButton}</Button>
            </div>
          </div>

          <div className="hero-visual" aria-label="Медресе сүрөтү">
            <div className="hero-card hero-card--main">
              <p>Билим</p>
              <strong>Тарбия</strong>
            </div>
            <div className="hero-card hero-card--small">
              <p>24/7</p>
              <strong>Камкордук</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="page-shell">
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">«Илим Булагы»</span>
              <h2>{homeData.intro.title}</h2>
            </div>
            <div className="intro-grid">
              <p>{homeData.intro.text}</p>
              <ul className="check-list">
                {homeData.intro.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Негизги артыкчылыктар</span>
              <h2>Билим берүүнүн сапаты</h2>
            </div>
            <div className="feature-grid">
              {homeData.benefits.map((item) => (
                <FeatureCard key={item.title} title={item.title} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-layout">
            <div>
              <div className="section-heading left-align">
                <span className="eyebrow">Жашоо чөйрөсү</span>
                <h2>Күнүмдүк тартип жана уюштуруу</h2>
              </div>
              <p>{homeData.overview.environment}</p>
            </div>
            <div className="info-stack">
              <div className="info-tile">
                <h3>Жатакана</h3>
                <p>{homeData.overview.accommodation}</p>
              </div>
              <div className="info-tile">
                <h3>Тамак-аш</h3>
                <p>{homeData.overview.meals}</p>
              </div>
              <div className="info-tile">
                <h3>24/7 козомол</h3>
                <p>{homeData.overview.supervision}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Галерея</span>
              <h2>Медресенин көрүнүшү</h2>
            </div>
            <div className="gallery-preview-grid">
              {homeData.galleryPreview.map((item) => (
                <figure key={item.title} className="gallery-preview-card">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
            <div className="section-link">
              <Link to="/gallery">Галереяны көрүү</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container faq-preview-box">
            <div className="section-heading left-align">
              <span className="eyebrow">КБС</span>
              <h2>Көп берилүүчү суроолор</h2>
            </div>
            <FAQAccordion items={faqData.slice(0, 4)} />
            <div className="section-link">
              <Link to="/faq">Бардык суроолор</Link>
            </div>
          </div>
        </section>

        <section className="section section--alt contact-block">
          <div className="container contact-grid">
            <div>
              <div className="section-heading left-align">
                <span className="eyebrow">Байланыш</span>
                <h2>Маалымат алуу</h2>
              </div>
              <p>{homeData.overview.contact}</p>
              <div className="info-list compact">
                <div>
                  <strong>Телефон:</strong>
                  <span>{site.contacts.phone || 'Текшерилүүдө'}</span>
                </div>
                <div>
                  <strong>Адрес:</strong>
                  <span>{site.contacts.address || 'Текшерилүүдө'}</span>
                </div>
                <div>
                  <strong>Иштөө мөөнөтү:</strong>
                  <span>{site.contacts.hours}</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
