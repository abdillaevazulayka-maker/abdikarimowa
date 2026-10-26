import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock3 } from 'lucide-react'
import site from '../data/site.json'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{site.name}</h3>
          <p>{site.tagline}</p>
        </div>

        <div>
          <h4>Навигация</h4>
          <ul className="footer-links">
            {site.navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Байланыш</h4>
          <ul className="footer-contacts">
            {site.contacts.phone && (
              <li>
                <Phone size={16} />
                <a href={`tel:${site.contacts.phone}`}>{site.contacts.phone}</a>
              </li>
            )}
            {site.contacts.address && (
              <li>
                <MapPin size={16} />
                <span>{site.contacts.address}</span>
              </li>
            )}
            {site.contacts.hours && (
              <li>
                <Clock3 size={16} />
                <span>{site.contacts.hours}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
