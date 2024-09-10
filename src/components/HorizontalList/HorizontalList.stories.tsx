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
      unorderedListClassName="flex justify-between h-[260px]"
      {...args}
    />
  </BrowserRouter>
);

// const windowWidth = window.innerWidth;

const HomePageItems = [
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
    description: <>Weddings, family and corporate events, community events</>,
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
];

export const Default = Template.bind({});

Default.args = {
  children: HomePageItems.map((item) => (
    <HorizontalList.Item
      title={item.title}
      description={item.description}
      listClassName="flex bg-wheat flex-col text-center text-black tracking-[-0.02em] w-[296px] py-[24px] px-[24px] gap-[24px]"
      titleClassName="font-merriweather text-section-subtext text-red leading-[38.4px]"
      descriptionClassName="font-roboto text-[22px] text-black leading-[26.4px]"
    />
  )),
};
