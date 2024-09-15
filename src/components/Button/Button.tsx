import React from "react";

interface ButtonProps {
  submit: () => void;
  buttonText?: string;
}

export const Button = ({ submit, buttonText }: ButtonProps) => {
  return (
    <div className="modal__form-submit">
      <button
        className="relative w-60 h-16 rounded-2xl border-4 border-lightGingerFlower bg-lightGingerFlower"
        type="submit"
        onClick={submit}
      >
        <p className="font-title text-wheat font-bold leading-6 text-base">
          {buttonText}
        </p>
      </button>
      <div className="absolute  w-60 h-16 rounded-2xl border-4 border-wetCoral top-2"></div>
    </div>
  );
};
