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
        <h1 className="mt-[142px] tracking-tighter text-welcome-title font-title text-center text-wetCoral leading-[86px] font-bold pb-[80px]">
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
        <p className="tracking-tight pt-[40px] max-w-[782px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack">
          Let us help you with your event. We can custom design a package to
          provide you with as much support as you need from planning, and
          permitting to staffing to ordering supplies or coordinating rentals.
          We are here to help and love to see our supported events come off
          without a hitch. Let us bring our experience to the table and help you
          make the most of your event.
        </p>
        <div></div>
        <div></div>
        <h2>Tell us about your event</h2>
        <p className="">
          Send the Team a Note. Tell us a little more about what you are looking
          for.
        </p>
        <Button
          onClick={onClick}
          buttonText="Drop us a line"
          submitButton={false}
        />
      </div>
      <Footer />
    </>
  );
}
