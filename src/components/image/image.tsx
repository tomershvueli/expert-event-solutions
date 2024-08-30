interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} />;
};
