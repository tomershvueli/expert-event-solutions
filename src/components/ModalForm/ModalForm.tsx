import {
  useForm,
  Control,
  Controller,
  FieldValues,
  Path,
} from "react-hook-form";

export interface ModalFormProps {
  submit: () => void;
}

type ModalFormRadioButtonProps = {
  name: string;
  isSelected: boolean;
  onChange: () => void;
  value: string;
};

const ModalFormRadioButton = ({
  name,
  isSelected,
  onChange,
  value,
}: ModalFormRadioButtonProps) => {
  return (
    <div className="modal__radio-group">
      <div>{isSelected && <div></div>}</div>
      <div className="modal__radio-group__container">
        <button
          className="modal__radio-group__button"
          name={name}
          type="button"
          value={value}
          onChange={onChange}
        ></button>
      </div>
      <p className="modal__radio-group__text">
        I agree to receive automated calls or text messages from Expert Event
        Solutions LLC in response to my inquiry. <br /> Msg & data rates may
        apply.
      </p>
    </div>
  );
};

type ModalFormRadioButtonGroupOption = { value: string; label: string };

type ModalFormRadioButtonGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: ModalFormRadioButtonGroupOption[];
};

const ModalFormRadioButtonGroup = <T extends FieldValues>({
  control,
  name,
  options,
}: ModalFormRadioButtonGroupProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div>
            {options.map((opt) => (
              <ModalFormRadioButton
                value={opt.value}
                isSelected={field.value === opt.value}
                name={name}
                onChange={field.onChange}
              ></ModalFormRadioButton>
            ))}
          </div>
        );
      }}
    ></Controller>
  );
};

export const ModalForm = ({ submit }: ModalFormProps) => {
  const { control, handleSubmit } = useForm();
  return (
    <form className="modal__form" onSubmit={handleSubmit(submit)}>
      <div className="modal__form-group">
        <input
          className="modal__input"
          type="text"
          id="name"
          placeholder="First and Last Name"
        />
      </div>
      <div className="modal__form-group">
        <input
          className="modal__input"
          type="text"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="modal__form-group">
        <input
          className="modal__input"
          type="text"
          id="phone"
          placeholder="Phone"
        />
      </div>
      <div className="modal__form-group">
        <textarea
          className="modal__textarea"
          id="message"
          placeholder="Give us some details about your event"
        />
      </div>
      <div className="modal__form-group">
        <ModalFormRadioButtonGroup
          control={control}
          options={[
            {
              value: "1",
              label:
                "I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply.",
            },
          ]}
          name="checkbox"
        ></ModalFormRadioButtonGroup>
      </div>
      <div className="modal__form-submit">
        <button
          className="modal__form-submit__button"
          type="submit"
          onClick={submit}
        >
          <p className="modal__form-submit__text">Submit</p>
        </button>
        <div className="modal__form-submit__divider"></div>
      </div>
    </form>
  );
};
