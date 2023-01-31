import "./ButtonNextStep.scss";

const ButtonNextStep = ({
  buttonSelectplaneDisabled,
  buttonPersonalFormDisabled,
  buttonDisabled,
  text,
}) => {
  return (
    <button
      className="form-buttons__button-nextstep"
      type="submit"
      disabled={
        buttonSelectplaneDisabled ||
        buttonPersonalFormDisabled ||
        buttonDisabled
      }
    >
      {text ? text : "Next Step"}
    </button>
  );
};
export default ButtonNextStep;
