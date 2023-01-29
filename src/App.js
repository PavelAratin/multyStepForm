// import FormWrapper from "./components/formWrapper/FormWrapper";
import FormAside from "./components/formAside/FormAside";
import FormWrapper from "./components/formWrapper/FormWrapper";
import Form from "./components/form/Form";
import FormPersonalInfo from "./components/formPersonalInfo/FormPersonalInfo";
import FormButtonsWrapper from "./components/formButtons/FormButtonsWrapper";
import ButtonGoBack from "./components/formButtons/ButtonGoBack";
import ButtonNextStep from "./components/formButtons/ButtonNextStep";

function App() {
  return (
    <FormWrapper>
      <FormAside></FormAside>
      <Form>
        <FormPersonalInfo></FormPersonalInfo>
        <FormButtonsWrapper>
          <ButtonGoBack></ButtonGoBack>
          <ButtonNextStep></ButtonNextStep>
        </FormButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}

export default App;
