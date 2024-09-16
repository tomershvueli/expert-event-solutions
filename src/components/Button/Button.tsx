interface Props {
  onSubmit: () => void;
  onClick: () => void;
  buttonText?: string;
  submitButton?: boolean;
}

export const Button = ({
  onSubmit,
  onClick,
  buttonText,
  submitButton,
}: Props) => {
  return (
    <>
      <div className={``}>
        <div className="absolute  w-60 h-10 rounded-2xl border-4 border-wetCoral top-8"></div>
        <button
          className="relative w-60 h-16 rounded-2xl border-4 border-lightGingerFlower bg-lightGingerFlower"
          type={submitButton ? "submit" : "button"}
          onClick={submitButton ? onSubmit : onClick}
        >
          <p className="font-title text-wheat font-bold leading-8 text-button-lg">
            {buttonText}
          </p>
        </button>
      </div>
    </>
  );
};
