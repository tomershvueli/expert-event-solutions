
import React from "react";
import './Button.css'

interface ButtonProps {
  submit: () => void;
  buttonText?: string; 
}



export const Button = ({submit, buttonText}: ButtonProps) =>{
return (
  // modal__form-submit
  <div className="modal__form-submit">
          <button
          // modal__form-submit__button
            className="relative w-60 h-16 rounded-2xl border-4 border-[#cf554e] bg-[#cf554e]"
            type="submit"
          onClick={submit}
          >
          
          {/* modal__form-submit__text */}
            <p className="font-title text-white font-bold leading-6 text-base">{buttonText}</p>
          </button>
          {/* modal__form-submit__divider */}
          <div className="absolute  w-60 h-16 rounded-2xl border-4 border-[#D0564F] top-2"></div>
        </div>
  )
}
