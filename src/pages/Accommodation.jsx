import accommodationData from '../data/accommodation.json'

function Accommodation() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow">
          <div className="section-heading left-align">
            <span className="eyebrow">Жатакана</span>
            <h1>Жашоо жана жатакана тартиби</h1>
          </div>
          <p className="lead">{accommodationData.intro}</p>
          <div className="info-stack single-column">
            {accommodationData.sections.map((section) => (
              <div className="info-tile" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
            <div className="info-tile">
              <h3>Алдыга алып баруучү буюмдар</h3>
              <ul className="bullet-list">
                {accommodationData.itemsToBring.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Accommodation
