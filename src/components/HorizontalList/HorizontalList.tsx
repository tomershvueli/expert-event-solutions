import { HorizontalListItem } from "./HorizontalListItem";
interface HorizontalListProps {
  children?: React.ReactNode;
}
export const HorizontalList = ({ children }: HorizontalListProps) => {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
};

HorizontalList.Item = HorizontalListItem;
