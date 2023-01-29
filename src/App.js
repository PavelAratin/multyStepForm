// import FormWrapper from "./components/formWrapper/FormWrapper";
import FormAside from "./components/formAside/FormAside";
import FormWrapper from "./components/formWrapper/FormWrapper";
import Form from "./components/form/Form";
import FormPersonalInfo from "./components/formPersonalInfo/FormPersonalInfo";
import FormButtonsWrapper from "./components/formButtons/FormButtonsWrapper";
import ButtonGoBack from "./components/formButtons/ButtonGoBack";
import ButtonNextStep from "./components/formButtons/ButtonNextStep";
import FormSelectPlan from "./components/formSelectPlan/FormSelectPlan";
import FormPickAddOnce from "./components/formPickAddOnce/FormPickAddOnce";

function App() {
  return (
    <FormWrapper>
      <FormAside></FormAside>
      <Form>
        {/* <FormPersonalInfo></FormPersonalInfo> */}
        {/* <FormSelectPlan></FormSelectPlan> */}
        <FormPickAddOnce></FormPickAddOnce>
        <FormButtonsWrapper>
          <ButtonGoBack></ButtonGoBack>
          <ButtonNextStep></ButtonNextStep>
        </FormButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}

export default App;
