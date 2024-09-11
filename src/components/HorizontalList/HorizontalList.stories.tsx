import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { HorizontalList } from "./HorizontalList";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
} as Meta<typeof HorizontalList>;

const Template: StoryFn<typeof HorizontalList> = (args) => (
  <BrowserRouter>
    <HorizontalList
      containerClassName="bg-wheat"
      unorderedListClassName="flex justify-between h-[260px] sm:flex-col sm:h-[100%] sm:flex-col sm:justify-center sm:items-center"
      {...args}
    />
  </BrowserRouter>
);

const windowWidth = window.innerWidth;

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

export const Default = Template.bind({});

Default.args = {
  children: HomePageItems.map((item) => (
    <HorizontalList.Item
      title={item.title}
      description={item.description}
      listClassName="flex flex-col w-[296px] text-center text-black tracking-[-0.02em] py-[24px] px-[24px] gap-[24px] sm:px-[12px] sm:gap-[12px]"
      titleClassName="font-merriweather text-section-subtext text-lightGingerFlower leading-[38.4px]"
      descriptionClassName="font-roboto text-[22px] text-black leading-[26.4px] sm:text-paragraph-sm "
    />
  )),
};
