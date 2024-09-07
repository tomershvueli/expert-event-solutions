import { HorizontalList } from "../HorizontalList/HorizontalList";

const HomePageItems = [
  {
    title: "Sport activities",
    description: "Running events, triathlons, obstacle races",
  },
  {
    title: "Work& family",
    description: "Weddings, family and corporate events, community events",
  },
  {
    title: "Arts&Crafts festivals",
    description: "Art festivals, farmers and craft markets",
  },
  {
    title: "And many more!",
    description: "Outdoor movies, live music, DJ services, and more!",
  },
];

function App() {
  return (
    <HorizontalList className="bg-wheat flex h-[260px] justify-between">
      {HomePageItems.map((item) => (
        <HorizontalList.Item
          key={item.title}
          title={item.title}
          description={item.description}
          listClassName="flex flex-col text-center text-black tracking-[-0.02em] w-[296px] py-[24px] px-[24px] gap-[24px]"
          titleClassName="font-merriweather text-[32px] text-red leading-[38.4px]"
          descriptionClassName="font-roboto text-[22px] text-black leading-[26.4px]"
        />
      ))}
    </HorizontalList>
  );
}

export default App;
