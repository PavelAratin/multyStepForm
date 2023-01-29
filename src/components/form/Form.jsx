import "./Form.scss";

const Form = ({ children }) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitFormHandler} className="form">
      {children}
    </form>
  );
};

export default Form;
