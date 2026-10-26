import aboutData from '../data/about.json'

function About() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow">
          <div className="section-heading left-align">
            <span className="eyebrow">Медресе жөнүндө</span>
            <h1>«Илим Булагы»</h1>
          </div>
          <p className="lead">{aboutData.intro}</p>
          <div className="info-stack single-column">
            <div className="info-tile">
              <h3>Окуу философиясы</h3>
              <p>{aboutData.philosophy}</p>
            </div>
            <div className="info-tile">
              <h3>Окуу чөйрөсү</h3>
              <p>{aboutData.environment}</p>
            </div>
            <div className="info-tile">
              <h3>Негизги баалуулуктар</h3>
              <ul className="bullet-list">
                {aboutData.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
            <div className="info-tile">
              <h3>Киришүү ыкмасы</h3>
              <p>{aboutData.approach}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
