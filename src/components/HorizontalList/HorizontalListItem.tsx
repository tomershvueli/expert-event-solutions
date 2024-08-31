interface HorizontalListItemProps {
  title: string;
  description: string;
  image?: HTMLImageElement;
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
        <img src={image.src} alt={image.alt} className={imageClassName} />
      )}
      <span className={titleClassName}>{title}</span>
      <p className={descriptionClassName}>{description}</p>
    </li>
  );
};
