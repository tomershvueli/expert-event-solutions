interface ImageProps {
  src: string;
  alt: string;
  context:
    | "horizontal"
    | "gallery"
    | "default"
    | "equipment"
    | "staffing"
    | "modal";
}

export const Image = ({ src, alt, context }: ImageProps) => {
  let className = "object-cover rounded-[40px] ";

  // Handle width and height based on context
  switch (context) {
    case "horizontal":
      className += "w-[180px] h-[180px] border-0 !border-0";
      break;
    case "gallery":
      className +=
        "w-[380px] h-[284px] xl:w-[343px] xl:h-[257px] lg:w-[300px] lg:h-[230px] md:w-[250px] md:h-[200px] sm:w-[220px] sm:h-[180px]";
      break;
    case "equipment":
      className +=
        "w-[1180px] h-[595px] xl:w-[1000px] xl:h-[500px] lg:w-[850px] lg:h-[425px] md:w-[700px] md:h-[350px] sm:w-[343px] sm:h-[418px]";
      break;
    case "staffing":
      className +=
        "w-[980px] h-[489px] xl:w-[800px] xl:h-[400px] lg:w-[700px] lg:h-[350px] md:w-[600px] md:h-[300px] sm:w-[343px] sm:h-[257px]";
      break;
    case "modal":
      className +=
        "w-[788px] h-[520px] xl:w-[700px] xl:h-[450px] lg:w-[600px] lg:h-[400px] md:w-[500px] md:h-[350px]";
      break;
    default:
      className +=
        "w-[1179px] h-[665px] xl:w-[1000px] xl:h-[550px] lg:w-[800px] lg:h-[450px] md:w-[600px] md:h-[350px] sm:w-[334px] sm:h-[418px]";
  }

  // Base border class
  let borderClass =
    "border-[6px] sm:border-4 md:border-4 border-lightGingerFlower";

  // Modify border class for gallery context
  if (context === "gallery") {
    borderClass = "border-0 sm:border-4 md:border-4 border-lightGingerFlower";
  }

  // Adding the border class to the className string by using template literals to concatenate the className
  className += ` ${borderClass}`;

  return <img src={src} alt={alt} className={className} />;
};
