import './FormAside.scss';

const FormAside = () => {
  return (
    <aside className="form-aside">
      <ul className="form-aside__list">
        <li className="form-aside__item">
          <span className="form-aside__number active">1</span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 1</span>
            <p className="form-aside__step-title">your info</p>
          </div>
        </li>
        <li className="form-aside__item">
          <span className="form-aside__number">2</span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 2</span>
            <p className="form-aside__step-title">select plane</p>
          </div>
        </li>
        <li className="form-aside__item">
          <span className="form-aside__number">3</span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 3</span>
            <p className="form-aside__step-title">add-ons</p>
          </div>
        </li>
        <li className="form-aside__item">
          <span className="form-aside__number">4</span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 4</span>
            <p className="form-aside__step-title">summary</p>
          </div>
        </li>
      </ul>
    </aside>
  )
}


export default FormAside;