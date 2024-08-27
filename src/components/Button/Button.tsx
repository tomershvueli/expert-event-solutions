
import React from "react";
import './Button.css'

interface ButtonProps {
  submit: () => void;
  buttonText?: string; 
}



export const Button = ({submit, buttonText}: ButtonProps) =>{
return (
  <div className="modal__form-submit">
          <button
            className="modal__form-submit__button"
            type="submit"
          onClick={submit}
          >
            <p className="modal__form-submit__text">{buttonText}</p>
          </button>
          <div className="modal__form-submit__divider"></div>
        </div>
  )
}
