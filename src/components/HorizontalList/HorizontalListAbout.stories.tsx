import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalImage from "../../images/HorizontalImage.svg";
import { HorizontalList } from "./HorizontalList";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
} as Meta<typeof HorizontalList>;

const Template: StoryFn<typeof HorizontalList> = (args) => (
  <BrowserRouter>
    <HorizontalList
      containerClassName="bg-wheat"
      unorderedListClassName="flex gap-[86px] justify-center"
      {...args}
    />
  </BrowserRouter>
);

interface AboutItem {
  src?: string; // Optional since the fallback may not have an image
  alt?: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
}

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

// const isMobile = window.innerWidth <= 800;

export const AboutList = Template.bind({});
AboutList.args = {
  children: (
    <>
      {aboutItems.map((item) =>
        item.src && item.alt ? (
          <HorizontalList.Item
            image={{ src: item.src, alt: item.alt }}
            title={item.title}
            description={item.description}
            listClassName="flex flex-col items-center w-[190px] text-center sm:gap-[12px] "
            imageClassName="flex flex-col "
            titleClassName="font-title text-section-subtext text-lightGingerFlower leading-[38.4px] pt-[24px] pb-[8px] sm:text-[28px] "
            descriptionClassName="font-roboto text-[22px] text-black font-normal leading-[28.6px] tracking-[-0.02em] w-[182px] sm:text-paragraph-sm "
          />
        ) : null,
      )}
    </>
  ),
};
