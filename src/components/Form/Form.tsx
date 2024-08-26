import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import TextAreaInput from "../TextAreaInput/TextAreaInput";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

interface FormProps {
  submit: () => void;
}

const Form = ({ submit }: FormProps) => {
  // ^defines form component using functional component w typescript
  // React.FC<FormProps> -->ensures component conforms to FormProps interface
  const methods = useForm<FormValues>();
  //useForm() manages form state and validation
  //returns an object containing methods and properties that help
  //with handling form input values, validation, and form submission
  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

  //handleSubmit
  return (
    <FormProvider {...methods}>
      {/* Spread form methods into FormProvider */}
      <form>
        <TextAreaInput
          name="description"
          placeholder="Give us some details about your event"
        />
        <CheckboxInput
          name="submit"
          label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
        />
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </FormProvider>
  );
  //formProvider= wraps form so that form methods are available to all
  //child components
};
export default Form;
