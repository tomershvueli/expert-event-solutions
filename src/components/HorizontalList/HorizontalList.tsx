import { HorizontalListItem } from "./HorizontalListItem";
interface HorizontalListProps {
  children?: React.ReactNode;
  containerClassName?: string;
  unorderedListClassName?: string;
}
export const HorizontalList = ({
  children,
  containerClassName,
  unorderedListClassName,
}: HorizontalListProps) => {
  return (
    <div className={containerClassName}>
      <ul className={unorderedListClassName}>{children}</ul>
    </div>
  );
};

HorizontalList.Item = HorizontalListItem;
