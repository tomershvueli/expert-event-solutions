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
      unorderedListClassName="bg-lightGingerFlower flex 
        justify-around h-[460px] py-[80px] px-[24px] rounded-[100px] sm:flex-col sm:h-[100%] sm:flex-col sm:justify-center
        sm:items-center sm:py-[60px] sm:px-[0px] sm:rounded-[60px]"
      {...args}
    />
  </BrowserRouter>
);

const windowWidth = window.innerWidth;

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
              <br /> Post-event support <br /> to ensure everything <br /> wraps
              up smoothly
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
              <br /> Post-event support <br /> to ensure everything <br /> wraps
              up smoothly
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

export const StaffingServicesList = Template.bind({});

StaffingServicesList.args = {
  children: staffingItems.map((item) => (
    <HorizontalList.Item
      title={item.title}
      description={item.description}
      listClassName=" flex flex-col
      text-center tracking-[-0.02em] py-[24px] px-[24px] gap-[24px] sm:px-[12px] sm:gap-[32px]"
      titleClassName="font-merriweather text-section-subtext text-wheat leading-[38.4px] sm:text-[28px]"
      descriptionClassName="font-roboto text-[22px] text-wheat leading-[26.4px] sm:text-paragraph-sm"
    />
  )),
};
