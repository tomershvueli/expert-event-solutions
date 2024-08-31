import { HorizontalListItem } from "./HorizontalListItem";
interface HorizontalListProps {
  children?: React.ReactNode;
  className?: string;
}
export const HorizontalList = ({
  children,
  className,
}: HorizontalListProps) => {
  return (
    <div className={className}>
      <ul className={className}>{children}</ul>
    </div>
  );
};

HorizontalList.Item = HorizontalListItem;
