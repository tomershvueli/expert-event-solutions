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
    <HorizontalList className="bg-wheat flex ">
      {HomePageItems.map((item) => (
        <HorizontalList.Item
          key={item.title}
          title={item.title}
          description={item.description}
          titleClassName="font-merriweather font-bold text-red"
          listClassName="font-roboto text-[22px] font-normal leading-[26.4px] tracking-[-0.02em] text-center text-black"
        />
      ))}
    </HorizontalList>
  );
}

export default App;
