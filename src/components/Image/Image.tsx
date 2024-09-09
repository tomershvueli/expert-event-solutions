interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export const Image = ({ src, alt }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-[40px] border-[6px] border-[lightGingerFlower] opacity- [0px]"
    />
  );
};
