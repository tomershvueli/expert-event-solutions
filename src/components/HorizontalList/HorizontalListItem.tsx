interface HorizontalListItemProps {
  title: string;
  description: string;
  image?: HTMLImageElement;
}
export const HorizontalListItem = ({
  title,
  description,
  image,
}: HorizontalListItemProps) => {
  return (
    <li>
      {image && <img src={image.src} alt={image.alt} />}
      <span>{title}</span>
      <p>{description}</p>
    </li>
  );
};
