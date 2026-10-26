import faqData from '../data/faq.json'
import FAQAccordion from '../components/FAQAccordion'

function FAQ() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow">
          <div className="section-heading left-align">
            <span className="eyebrow">КБС</span>
            <h1>Көп берилүүчү суроолор</h1>
          </div>
          <FAQAccordion items={faqData} />
        </div>
      </section>
    </main>
  )
}

export default FAQ
