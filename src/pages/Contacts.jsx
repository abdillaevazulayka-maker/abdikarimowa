import { MessageCircle, MapPin, Phone, Clock3, Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import contactsData from '../data/contacts.json'

function Contacts() {
  const whatsappHref = contactsData.whatsapp ? `https://wa.me/${contactsData.whatsapp.replace(/\s+/g, '')}` : null

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container contact-page-grid">
          <div>
            <div className="section-heading left-align">
              <span className="eyebrow">Байланыш</span>
              <h1>Администрация менен байланыш</h1>
            </div>
            <p className="lead">{contactsData.intro}</p>
            <div className="info-list">
              {contactsData.phone && (
                <div>
                  <Phone size={18} />
                  <a href={`tel:${contactsData.phone}`}>{contactsData.phone}</a>
                </div>
              )}
              {whatsappHref && (
                <div>
                  <MessageCircle size={18} />
                  <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              )}
              {contactsData.address && (
                <div>
                  <MapPin size={18} />
                  <span>{contactsData.address}</span>
                </div>
              )}
              {contactsData.email && (
                <div>
                  <Mail size={18} />
                  <a href={`mailto:${contactsData.email}`}>{contactsData.email}</a>
                </div>
              )}
              {contactsData.hours && (
                <div>
                  <Clock3 size={18} />
                  <span>{contactsData.hours}</span>
                </div>
              )}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default Contacts
