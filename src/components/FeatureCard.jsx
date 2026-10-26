import * as Icons from 'lucide-react'

function FeatureCard({ title, text, icon }) {
  const Icon = Icons[icon] || Icons.Info

  return (
    <article className="feature-card">
      <div className="feature-card__icon" aria-hidden="true">
        <Icon size={26} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default FeatureCard
