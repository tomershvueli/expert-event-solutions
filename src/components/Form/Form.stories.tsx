import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
// import { FormComponent } from "./Form";
import { Form } from "./Form";
import { FieldValues, useForm } from "react-hook-form";

export default {
  title: "components/Form",
  component: Form,
} as Meta;

const Template: StoryFn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <BrowserRouter>
      {/* you can place either value 'email or phone' (case sensitive) in type, placeholder is optional and customizable */}
      {/* <FormComponent {...args} /> */}
      <Form.TextInput
        type="tel"
        placeholder="Phone Number"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={(data: FieldValues) => {
          console.log("Submitted data:", data);
        }}
      ></Form.TextInput>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {};
