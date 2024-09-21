interface Props {
  onClick?: () => void;
  buttonText?: string;
  submitButton?: boolean;
}

export const Button = ({ onClick, buttonText, submitButton }: Props) => {
  return (
    <>
      <button
        className={` group relative w-80 h-20 rounded-3xl border-6 border-lightGingerFlower bg-lightGingerFlower md:border-4 md:rounded-2xl md:w-56 md:h-14 `}
        type={submitButton ? "submit" : "button"}
        onClick={onClick}
      >
        <div className="group-hover:hidden absolute w-80 h-20 rounded-3xl border-[6px] border-wetCoral top-[13px] md:border-4 md:rounded-2xl md:w-56 md:h-14 md:left-[-4px] md:top-1 "></div>
        <p
          className={`font-title text-wheat font-bold leading-8 text-button-lg md:text-button-sm md:leading-5 `}
        >
          {buttonText}
        </p>
      </button>
    </>
  );
};
