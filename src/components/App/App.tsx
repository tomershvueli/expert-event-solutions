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
            title: <>Work&family</>,
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

  const staffingItems =
    windowWidth > 800
      ? [
          {
            title: (
              <>
                1.
                <br /> Planning the event, <br /> managing everything <br />
                from logistics to decor
              </>
            ),
            description: (
              <>
                to ensure a seamless <br /> and memorable experience.
              </>
            ),
          },
          {
            title: (
              <>
                2.
                <br /> Post-event support <br /> to ensure everything <br />{" "}
                wraps up smoothly
              </>
            ),
            description: (
              <>
                Our commitment doesn't end <br /> when the event does.
              </>
            ),
          },
          {
            title: (
              <>
                3.
                <br />
                We tailor every event <br /> to your theme <br /> or request
              </>
            ),
            description: (
              <>
                We pride ourselves on our individual <br /> approach to event
                organizing
              </>
            ),
          },
        ]
      : [];

  return (
    <div>
      {/* Home Page List */}
      <HorizontalList
        containerClassName="bg-wheat"
        unorderedListClassName="flex justify-between h-[260px] sm:flex-col sm:h-[100%] sm:flex-col sm:justify-center sm:items-center"
      >
        {HomePageItems.map((item) => (
          <HorizontalList.Item
            title={item.title}
            description={item.description}
            listClassName="flex flex-col w-[296px] 
            text-center text-black tracking-[-0.02em] py-[24px] px-[24px] gap-[24px] sm:px-[12px] sm:gap-[12px]"
            titleClassName="font-merriweather text-section-subtext text-lightGingerFlower leading-[38.4px]"
            descriptionClassName="font-roboto text-[22px] text-black leading-[26.4px] sm:text-paragraph-sm"
          />
        ))}
      </HorizontalList>
      {/* Staffing Services List*/}
      <HorizontalList
        containerClassName="bg-wheat"
        unorderedListClassName="bg-lightGingerFlower flex  justify-around h-[460px] py-[80px] px-[24px] rounded-[100px] sm:flex-col sm:h-[100%] sm:flex-col sm:justify-center sm:items-center"
      >
        {staffingItems.map((item) => (
          <HorizontalList.Item
            title={item.title}
            description={item.description}
            listClassName=" flex flex-col
            text-center tracking-[-0.02em] py-[24px] px-[24px] gap-[24px] sm:px-[12px] sm:gap-[12px]"
            titleClassName="font-merriweather text-section-subtext text-wheat leading-[38.4px]"
            descriptionClassName="font-roboto text-[22px] text-wheat leading-[26.4px] sm:text-paragraph-sm"
          />
        ))}
      </HorizontalList>
    </div>
  );
}

export default App;
