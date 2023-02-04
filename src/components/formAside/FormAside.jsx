import { useSelector } from "react-redux";
import "./FormAside.scss";

const FormAside = () => {
  const data = useSelector((state) => state);
  let stepNumber = 1;
  if (data.length) {
    stepNumber = data[3].stepForm;
  }
  return (
    <aside className="form-aside">
      <ul className="form-aside__list">
        <li className="form-aside__item">
          <span
            className={`form-aside__number ${stepNumber === 1 ? "active" : ""}`}
          >
            1
          </span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 1</span>
            <p className="form-aside__step-title">your info</p>
          </div>
        </li>
        <li className="form-aside__item">
          <span
            className={`form-aside__number ${stepNumber === 2 ? "active" : ""}`}
          >
            2
          </span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 2</span>
            <p className="form-aside__step-title">select plane</p>
          </div>
        </li>
        <li className="form-aside__item">
          <span
            className={`form-aside__number ${stepNumber === 3 ? "active" : ""}`}
          >
            3
          </span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 3</span>
            <p className="form-aside__step-title">add-ons</p>
          </div>
        </li>
        <li className="form-aside__item">
          <span
            className={`form-aside__number ${stepNumber === 4 ? "active" : ""}`}
          >
            4
          </span>
          <div className="form-aside__wrapper">
            <span className="form-aside__step">step 4</span>
            <p className="form-aside__step-title">summary</p>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default FormAside;
