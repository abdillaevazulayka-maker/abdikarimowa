import educationData from '../data/education.json'

function Education() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow">
          <div className="section-heading left-align">
            <span className="eyebrow">Окуу</span>
            <h1>Билим берүү тартиби</h1>
          </div>
          <p className="lead">{educationData.intro}</p>
          <div className="info-stack single-column">
            {educationData.sections.map((section) => (
              <div className="info-tile" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
            <div className="info-tile">
              <h3>Иллюстративдик күн тартиби</h3>
              <ul className="schedule-list">
                {educationData.sampleTimetable.map((item) => (
                  <li key={item.time}><strong>{item.time}</strong><span>{item.activity}</span></li>
                ))}
              </ul>
            </div>
            <div className="info-tile warning-box">
              <h3>Эскертүү</h3>
              <p>{educationData.note}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Education
