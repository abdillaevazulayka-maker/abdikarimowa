import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow align-center">
          <span className="eyebrow">404</span>
          <h1>Баракча табылган жок</h1>
          <p>Сиз сураган бетти таба албайдык. Башкы бетке кайтып, медресенин маалыматтарын көрүңүз.</p>
          <Link to="/" className="button button--primary">Башкы бет</Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound
