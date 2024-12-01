import { Image } from "../Image/Image";

interface HorizontalListItemProps {
  title: JSX.Element | string;
  description: JSX.Element | string;
  image?: { src: string; alt: string };
  className?: string;
  listClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}

export const HorizontalListItem = ({
  title,
  description,
  image,
  listClassName,
  titleClassName,
  descriptionClassName,
  imageClassName,
}: HorizontalListItemProps) => {
  return (
    <li className={listClassName}>
      {image && (
        <div className={imageClassName}>
        <Image src={image.src} alt={image.alt} context="horizontal" />
        </div>
      )}
      <span className={titleClassName}>{title}</span>
      <p className={descriptionClassName}>{description}</p>
    </li>
  );
};
