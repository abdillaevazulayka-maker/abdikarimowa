import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span>{item.question}</span>
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <div
              id={`faq-panel-${index}`}
              className="faq-answer"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion
