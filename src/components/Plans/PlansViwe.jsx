export const PlansViwe = ({title, characteristics, characteristicsNull = [], price, div}) => {
  return (
    <>
      <div className="plan-container mt-5 rounded-5 rounded-top-0" id={`plans-${div}`}>
        <h3 className="text-white">{title}</h3>
        <ul>
          {characteristics.map((item, index) => (
              <li key={index} className="text-white list-characteristics">{item}</li>
            ))}
          {characteristicsNull.map((item, index) => (
              <li key={index} className="text-white list-characteristics-null text-decoration-line-through">{item}</li>
            ))}
        </ul>
        <button id="btn-price" className="text-white price-plan btn btn-success d-grid mx-auto mt-3">
          <h5><a href="#contact-us" className="text-white text-decoration-none">${price} ARS</a></h5>
        </button>
        <h5 className="text-white price-plan"></h5>
      </div>
    </>
  )
}