import supervisionData from '../data/supervision.json'

function Supervision() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow">
          <div className="section-heading left-align">
            <span className="eyebrow">24/7 козомол</span>
            <h1>Камкордук жана тартип</h1>
          </div>
          <p className="lead">{supervisionData.intro}</p>
          <div className="info-stack single-column">
            {supervisionData.sections.map((section) => (
              <div className="info-tile" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
            <div className="info-tile warning-box">
              <h3>Коопсуздуктун негизги принциптери</h3>
              <ul className="bullet-list">
                {supervisionData.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="info-tile">
              <h3>Штандарттуу жардам</h3>
              <p>{supervisionData.emergency}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Supervision
