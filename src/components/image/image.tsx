interface InputProps {
  placeholder: string;
  type: "email" | "phone";
}
export const Image = ({ placeholder, type }: InputProps) => {
  return <input placeholder={placeholder} type={type}></input>;
};
