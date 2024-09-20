import { HorizontalList } from "../HorizontalList";
import { useEffect, useState } from "react";
export function HorizontalListStaffing() {
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
      : [
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
                We tailor every event <br /> to your theme or <br /> request
              </>
            ),
            description: (
              <>
                We pride ourselves on our individual <br /> approach to event
                organizing
              </>
            ),
          },
        ];

  return (
    <div>
      <HorizontalList
        containerClassName="flex bg-wheat justify-center"
        unorderedListClassName="bg-lightGingerFlower flex 
        justify-around h-[100%] py-[80px] px-[24px] rounded-[100px] w-[95%] flex-wrap
        lg:align-center lg:flex-col lg:w-[80%] 
        md:flex-col md:justify-center md:py-[60px] md:px-[0px] md:rounded-[60px]
        md:h-[100%] 
        sm:flex-col sm:h-[100%] sm:flex-col sm:justify-center sm:w-[95%]
        sm:items-center sm:py-[60px] sm:px-[0px] sm:rounded-[60px]"
      >
        {staffingItems.map((item) => (
          <HorizontalList.Item
            title={item.title}
            description={item.description}
            listClassName=" flex flex-col
            text-center tracking-[-0.02em] py-[24px] px-[24px] gap-[24px]
            sm:px-[12px] sm:gap-[32px]"
            titleClassName="font-title text-section-subtext text-wheat leading-[38.4px] 
            sm:text-[28px]"
            descriptionClassName="font-roboto text-[22px] text-wheat leading-[26.4px]
            sm:text-paragraph-sm"
          />
        ))}
      </HorizontalList>
    </div>
  );
}