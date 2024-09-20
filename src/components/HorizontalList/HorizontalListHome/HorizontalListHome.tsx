import { HorizontalList } from "../HorizontalList";
// import { useEffect, useState } from "react";
export function HorizontalListHome() {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const width = window.innerWidth;
  //       setWindowWidth(width);
  //     };

  //     handleResize();

  //     window.addEventListener("resize", handleResize);

  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  const HomePageItems =
    // windowWidth > 800  ?
    [
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
        description: <>Art festivals, farmers and craft markets</>,
      },
      {
        title: (
          <>
            And many <br /> more!
          </>
        ),
        description: <>Outdoor movies, live music, DJ services, and more!</>,
      },
    ];
  //   : [
  //       {
  //         title: <>Sport activities</>,
  //         description: <>Running events, triathlons, obstacle races </>,
  //       },
  //       {
  //         title: <>Work&family</>,
  //         description: (
  //           <>
  //             Weddings, family and corporate <br /> events, community events
  //           </>
  //         ),
  //       },
  //       {
  //         title: <>Arts&Crafts festivals</>,
  //         description: (
  //           <>
  //             Art festivals, farmers <br /> and craft markets
  //           </>
  //         ),
  //       },
  //       {
  //         title: <>And many more!</>,
  //         description: (
  //           <>
  //             Outdoor movies, live music, <br /> DJ services, and more!
  //           </>
  //         ),
  //       },
  //     ];

  return (
    <div>
      {/* Home Page List */}
      <HorizontalList
        containerClassName="flex bg-wheat justify-center w-full"
        unorderedListClassName="flex justify-center h-[260px] w-full py-[24px] px-[24px]
        lg:flex-row lg:h-[100%] lg:justify-normal
        md:flex-col md:h-[100%] md:items-center md:gap-[20px]
        sm:flex-col sm:h-[100%] sm:items-center sm:gap-[20px]"
      >
        {HomePageItems.map((item) => (
          <HorizontalList.Item
            title={item.title}
            description={item.description}
            listClassName="flex flex-col w-[333px] items-center justify-start
            text-center text-black gap-[24px]
            lg:px-[12px] lg:gap-[12px] 
            md:px-[12px] md:gap-[12px]
            sm:px-[12px] sm:gap-[12px]"
            //
            titleClassName="font-title text-section-subtext text-lightGingerFlower leading-[38.4px]"
            descriptionClassName="font-roboto text-paragraph-lg text-black 
            leading-[26.4px] w-[246px] tracking-[-0.02em] h-[78px]
            lg:text-paragraph-sm lg:leading-[24px]
            md:text-paragraph-sm md:leading-[24px]
            sm:text-paragraph-sm sm:leading-[24px]"
          />
        ))}
      </HorizontalList>
    </div>
  );
}
