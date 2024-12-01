import { HorizontalList } from "../HorizontalList";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalImage from "../../../images/HorizontalImage.svg";
import "swiper/css";
interface AboutItem {
  src?: string; // Optional since the fallback may not have an image
  alt?: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
}
export function HorizontalListImage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth <= 850;

  const aboutItems: AboutItem[] = [
    {
      src: HorizontalImage,
      alt: "Don",
      title: <>Don Stoner</>,
      description: <>Co-Owner Expert Event Solutions LLC</>,
    },
    {
      src: HorizontalImage,
      alt: "Don",
      title: <>Co-Owner</>,
      description: <>Co-Owner Expert Event Solutions LLC</>,
    },
    {
      src: HorizontalImage,
      alt: "Don",
      title: <>Manager</>,
      description: <>Manager at Expert Event Solutions LLC</>,
    },
    {
      src: HorizontalImage,
      alt: "Don",
      title: <>Manager 2</>,
      description: <>Manager 2 Expert Event Solutions LLC</>,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {!isMobile ? (
        <HorizontalList
          containerClassName="bg-wheat"
          unorderedListClassName="flex gap-[86px] pt-[10px] justify-center"
        >
          {aboutItems.map((item, index) =>
            item.src && item.alt ? ( // Ensure src and alt exist
              <HorizontalList.Item
                key={index}
                image={{ src: item.src, alt: item.alt }} // Pass image as object
                title={item.title}
                description={item.description}
                listClassName="flex flex-col items-center w-[190px] text-center sm:gap-[12px] "
                imageClassName="flex flex-col "
                titleClassName="font-title text-section-subtext text-lightGingerFlower leading-[38.4px] pt-[24px] pb-[8px] sm:text-[28px] "
                descriptionClassName="font-roboto text-paragraph-lg text-black font-normal leading-[28.6px] tracking-[-0.02em] w-[182px] sm:text-paragraph-sm "
              />
            ) : null,
          )}
        </HorizontalList>
      ) : (
        <HorizontalList
          containerClassName="bg-wheat"
          unorderedListClassName="flex gap-[86px] pt-[10px] justify-center sm:ml-[16px] "
        >
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1.3, // Small mobile view
              },
              414: {
                slidesPerView: 1.6, // Large mobile view
              },
              834: {
                slidesPerView: 3, // Tablet view
              },
            }}
          >
            {aboutItems.map(
              (item, index) =>
                item.src && item.alt ? ( // Ensure src and alt exist
                  <SwiperSlide key={index} style={{}}>
                    <HorizontalList.Item
                      key={index}
                      image={{ src: item.src, alt: item.alt }} // Pass image as object
                      title={item.title}
                      description={item.description}
                      listClassName="flex flex-col items-center w-[190px] text-center sm:gap-[12px]"
                      imageClassName="flex flex-col"
                      titleClassName="font-title text-section-subtext text-lightGingerFlower leading-[38.4px] pt-[24px] pb-[8px] sm:text-[28px] "
                      descriptionClassName="font-roboto text-paragraph-lg text-black font-normal leading-[28.6px] tracking-[-0.02em] w-[182px] sm:text-paragraph-sm"
                    />
                  </SwiperSlide>
                ) : null, // change this to render a overlay with no image
            )}
          </Swiper>
        </HorizontalList>
      )}
    </div>
  );
}
