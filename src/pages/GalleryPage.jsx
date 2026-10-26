import { useMemo, useState } from 'react'
import galleryData from '../data/gallery.json'
import Lightbox from '../components/Lightbox'

function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const images = useMemo(
    () => galleryData.categories.flatMap((category) => category.items.map((item) => ({ ...item, category: category.name }))),
    [],
  )

  const openLightbox = (index) => setSelectedImageIndex(index)

  const closeLightbox = () => setSelectedImageIndex(null)

  const showPrevious = () => {
    setSelectedImageIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length))
  }

  const showNext = () => {
    setSelectedImageIndex((current) => (current === null ? 0 : (current + 1) % images.length))
  }

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <div className="section-heading left-align">
            <span className="eyebrow">Галерея</span>
            <h1>Медресенин сүрөттөрү</h1>
          </div>

          {galleryData.categories.map((category) => (
            <div key={category.name} className="gallery-category">
              <h2>{category.name}</h2>
              <div className="gallery-grid">
                {category.items.map((item, index) => {
                  const globalIndex = images.findIndex((image) => image.title === item.title && image.category === category.name)

                  return (
                    <button
                      type="button"
                      key={`${category.name}-${item.title}`}
                      className="gallery-item"
                      onClick={() => openLightbox(globalIndex)}
                      aria-label={`Open ${item.title}`}
                    >
                      <img src={item.image} alt={item.alt} loading="lazy" />
                      <span>{item.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <Lightbox
          images={images}
          index={selectedImageIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      )}
    </main>
  )
}

export default GalleryPage
