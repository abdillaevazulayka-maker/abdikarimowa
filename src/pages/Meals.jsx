import mealsData from '../data/meals.json'

function Meals() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container narrow">
          <div className="section-heading left-align">
            <span className="eyebrow">Тамак-аш</span>
            <h1>Тамактануу тартиби</h1>
          </div>
          <p className="lead">{mealsData.intro}</p>

          <div className="info-tile">
            <h3>Тамактануу графиги</h3>
            <ul className="schedule-list">
              {mealsData.mealSchedule.map((meal) => (
                <li key={meal.label}><strong>{meal.label}</strong><span>{meal.time}</span></li>
              ))}
            </ul>
          </div>

          <div className="info-stack single-column">
            {mealsData.details.map((detail) => (
              <div className="info-tile" key={detail}>
                <p>{detail}</p>
              </div>
            ))}
            <div className="info-tile warning-box">
              <h3>Маалымат</h3>
              <p>{mealsData.placeholder}</p>
            </div>
            <div className="info-tile">
              <h3>Диета талаптары</h3>
              <p>{mealsData.dietaryNotice}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Meals
