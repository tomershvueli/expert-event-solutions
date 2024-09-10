import { HorizontalList } from "../HorizontalList/HorizontalList";
import { useEffect, useState } from "react";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HomePageItems =
    windowWidth > 800
      ? [
          {
            title: (
              <>
                Sport <br /> activities
              </>
            ),
            description: <>Running events, triathlons, obstacle races </>,
          },
          {
            title: (
              <>
                Work& <br /> family
              </>
            ),
            description: (
              <>Weddings, family and corporate events, community events</>
            ),
          },
          {
            title: (
              <>
                Arts&Crafts
                <br /> festivals
              </>
            ),
            description: (
              <>
                Art festivals, farmers <br /> and craft markets
              </>
            ),
          },
          {
            title: (
              <>
                And many <br /> more!
              </>
            ),
            description: (
              <>
                Outdoor movies, live music, DJ services, <br /> and more!
              </>
            ),
          },
        ]
      : [
          {
            title: <>Sport activities</>,
            description: <>Running events, triathlons, obstacle races </>,
          },
          {
            title: <>Work& family</>,
            description: (
              <>
                Weddings, family and corporate <br /> events, community events
              </>
            ),
          },
          {
            title: <>Arts&Crafts festivals</>,
            description: (
              <>
                Art festivals, farmers <br /> and craft markets
              </>
            ),
          },
          {
            title: <>And many more!</>,
            description: (
              <>
                Outdoor movies, live music, <br /> DJ services, and more!
              </>
            ),
          },
        ];

  return (
    <HorizontalList
      containerClassName="bg-wheat sm:flex-col sm:justify-center sm:items-center"
      unorderedListClassName="flex justify-between h-[260px] w-[296px] sm:flex-col sm:h-[100%]"
    >
      {HomePageItems.map((item) => (
        <HorizontalList.Item
          title={item.title}
          description={item.description}
          listClassName="flex flex-col text-center text-black tracking-[-0.02em] py-[24px] px-[24px] gap-[24px] sm:px-[12px] sm:gap-[12px]"
          titleClassName="font-merriweather text-section-subtext text-red leading-[38.4px]"
          descriptionClassName="font-roboto text-[22px] text-black leading-[26.4px] sm:text-paragraph-sm "
        />
      ))}
    </HorizontalList>
  );
}

export default App;
