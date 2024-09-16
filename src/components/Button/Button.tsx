import buttonArrow from "../../assets/button-arrow.svg";

interface Props {
  onSubmit: () => void;
  onClick: () => void;
  buttonText?: string;
  arrowButton?: boolean;
  submitButton?: boolean;
}

export const Button = ({
  onSubmit,
  onClick,
  buttonText,
  arrowButton,
  submitButton,
}: Props) => {
  return (
    <>
      <button
        className={`relative w-60 h-16 rounded-2xl border-4 border-lightGingerFlower bg-lightGingerFlower`}
        type={submitButton ? "submit" : "button"}
        onClick={submitButton ? onSubmit : onClick}
      >
        <p
          className={`font-title text-wheat font-bold leading-8 text-button-lg`}
        >
          {buttonText}
        </p>
        {arrowButton && (
          <img className="" src={buttonArrow} alt="button arrow" />
        )}
      </button>

      {!arrowButton && (
        <div className="absolute  w-60 h-10 rounded-2xl border-4 border-wetCoral top-8"></div>
      )}
    </>
  );
};
