import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

function Lightbox({ images, index, onClose, onNext, onPrevious }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrevious()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onNext, onPrevious])

  if (!images || !images.length) return null

  const currentImage = images[index]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={currentImage?.alt || 'Gallery image'}>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <X size={24} />
      </button>

      <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={onPrevious} aria-label="Previous image">
        <ChevronLeft size={28} />
      </button>

      <img src={currentImage.image} alt={currentImage.alt} className="lightbox__image" />

      <button type="button" className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="Next image">
        <ChevronRight size={28} />
      </button>
    </div>
  )
}

export default Lightbox
