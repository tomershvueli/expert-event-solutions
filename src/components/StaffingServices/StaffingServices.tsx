import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Image } from "../Image/Image";
import { Footer } from "../Footer/Footer";
import { Button } from "../Button/Button";
import outdoor from "../../assets/image-outdoor1.png";

interface Props {
  screenWidth?: "mobile" | "desktop";
  onClick?: () => void;
}

export function StaffingServices({ screenWidth, onClick }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const isMobile = screenWidth === "mobile";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      {isMobile && windowWidth}
      <div className="bg-wheat relative">
        <h1 className="px-[16px] mt-[76px] pt-[60px] tracking-tighter text-welcome-title font-title text-center text-wetCoral leading-[86px] font-bold pb-[80px]">
          Staffing Services
        </h1>
        <div className="flex justify-center">
          <Image src={outdoor} alt="Staffing Services" context="staffing" />
        </div>
        <p className="tracking-tight pt-[80px] max-w-[782px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack">
          Expert Event Solutions offers a variety of services to meet you needs.
          Our team is experienced in planning, preparation, execution, customer
          service, clean up and post event support for events ranging from
          concerts, to art festivals, farmers markets, running and triathlon
          events, weddings, corporate events and family functions.
        </p>
        <p className="tracking-tight pt-[40px] pb-[80px] max-w-[782px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack">
          Let us help you with your event. We can custom design a package to
          provide you with as much support as you need from planning, and
          permitting to staffing to ordering supplies or coordinating rentals.
          We are here to help and love to see our supported events come off
          without a hitch. Let us bring our experience to the table and help you
          make the most of your event.
        </p>
        <div className="bg-gingerFlower rounded-[60px] flex justify-center relative mx-auto max-w-[1180px] pt-[80px] pb-[138px] px-[24px]">
          <div className="absolute top-[375px] border-[6px] w-[1180px] px-[16px] h-[609px] border-gingerFlower rounded-b-[60px]"></div>
          <ul className="flex flex-wrap w-fit px-[24px] justify-center">
            <li className="h-[256px] w-[343px] flex flex-col gap-[24px]">
              <h3 className="text-center font-text text-[42px] leading-[50px] font-bold text-wheat tracking-tighter">
                1.
              </h3>
              <p className="w-[331px] font-title text-wheat text-[28px] leading-[34px] font-bold tracking-tighter text-center">
                Planning the event, managing everything from logistics to decor
              </p>
              <p className="w-[331px] font-text text-wheat text-paragraph-lg leading-[26px] font-normal tracking-tight text-center">
                to ensure a seamless and memorable experience.
              </p>
            </li>
            <li className="h-[256px] w-[343px] flex flex-col gap-[24px]">
              <h3 className="text-center font-text text-[42px] leading-[50px] font-bold text-wheat tracking-tighter">
                2.
              </h3>
              <p className="w-[331px] font-title text-wheat text-[28px] leading-[34px] font-bold tracking-tighter text-center">
                Post-event support to ensure everything wraps up smoothly
              </p>
              <p className="w-[331px] font-text text-wheat text-paragraph-lg leading-[26px] font-normal tracking-tight text-center">
                Our commitment doesn't end when the event does.
              </p>
            </li>
            <li className="h-[256px] w-[343px] flex flex-col gap-[24px] items-center">
              <h3 className="text-center font-text text-[42px] leading-[50px] font-bold text-wheat tracking-tighter">
                3.
              </h3>
              <p className="w-[290px] font-title text-wheat text-[28px] leading-[34px] font-bold tracking-tighter text-center">
                We tailor every event to your theme or request
              </p>
              <p className="w-[331px] font-text text-wheat text-paragraph-lg leading-[26px] font-normal tracking-tight text-center">
                We pride ourselves on our individual approach to event
                organizing
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center px-[16px] pt-[120px] pb-[133px]">
          <h2 className="max-w-600px leading-[67px] tracking-tighter text-center text-contact-header font-title font-bold text-wetCoral">
            Tell us about your event
          </h2>
          <p className="pt-[24px] pb-[40px] max-w-438px tracking-tight pt-[40px] max-w-[438px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack">
            Send the Team a Note. Tell us a little more about what you are
            looking for.
          </p>
          <Button
            onClick={onClick}
            buttonText="Drop us a line"
            submitButton={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
