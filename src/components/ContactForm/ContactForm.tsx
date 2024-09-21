import React from "react";
import { Modal } from "../Modal/Modal";
import Form from "../Form/Form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import {
  FormPhoneInputComponent,
  FormEmailInputComponent,
} from "../Form/FormTextInputComponent";
import { action } from "@storybook/addon-actions";
interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}
const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name="contactForm">
      <Form
        submit={(data) => {
          action("form-submitted")(data);
          onClose();
        }}
      >
        <FormPhoneInputComponent />
        <FormEmailInputComponent />
        <TextAreaInput
          name="description"
          placeholder="Give us some details about your event"
          required={true}
          requiredError="This field is required"
        />
        <CheckboxInput
          name="agreeToTerms"
          label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
          required={true}
          requiredError="You must agree to the terms"
        />
      </Form>
    </Modal>
  );
};

export default ContactForm;
