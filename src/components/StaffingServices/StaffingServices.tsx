import { Header } from "../Header/Header";
import { Image } from "../Image/Image";
import { Footer } from "../Footer/Footer";
import { Button } from "../Button/Button";
import outdoor from "../../assets/image-outdoor1.png";

interface Props {
  screenWidth?: "mobile" | "desktop";
  onClick?: () => void;
}

export function StaffingServices({ onClick }: Props) {
  return (
    <>
      <Header screenWidth="desktop" />
      <div className="bg-wheat relative">
        <h1 className="px-[16px] mt-[76px] pt-[60px] tracking-tighter text-welcome-title font-title text-center text-wetCoral leading-[86px] font-bold pb-[80px] md:text-mobile-title md:leading-[53px] md:pt-[80px] md:pb-[60px] md:px-[30px]">
          Staffing Services
        </h1>
        <div className="flex justify-center">
          <Image src={outdoor} alt="Staffing Services" context="staffing" />
        </div>
        <p className="tracking-tight pt-[80px] max-w-[782px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack md:text-paragraph-sm md:leading-[26px] md:pt-[40px]">
          Expert Event Solutions offers a variety of services to meet you needs.
          Our team is experienced in planning, preparation, execution, customer
          service, clean up and post event support for events ranging from
          concerts, to art festivals, farmers markets, running and triathlon
          events, weddings, corporate events and family functions.
        </p>
        <p className="tracking-tight pt-[40px] pb-[80px] max-w-[782px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack md:text-paragraph-sm md:leading-[26px] md:pt-[20px] md:pb-[40px]">
          Let us help you with your event. We can custom design a package to
          provide you with as much support as you need from planning, and
          permitting to staffing to ordering supplies or coordinating rentals.
          We are here to help and love to see our supported events come off
          without a hitch. Let us bring our experience to the table and help you
          make the most of your event.
        </p>
        <div className="inline-block bg-gingerFlower rounded-[60px] flex flex-wrap justify-center relative mx-auto max-w-[1180px] pt-[80px] pb-[138px] px-[24px] xl:mx-[50px] lg:mx-[16px] md:py-[60px] md:px-0">
          <div className="absolute bottom-[calc(80px-609px)] border-[6px] w-[1180px] px-[16px] h-[609px] border-gingerFlower rounded-b-[60px] xl:w-[calc(100vw-100px)] lg:w-[calc(100vw-32px)] md:h-[754px] md:top-[628px]"></div>
          <ul className="flex flex-wrap w-fit px-[24px] justify-center lg:px-0 md:gap-[32px] md:flex-col">
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
        <div className="flex flex-col items-center px-[16px] pt-[120px] pb-[133px] md:pt-[80px] md:px-[47px]">
          <h2 className="max-w-600px leading-[67px] tracking-tighter text-center text-contact-header font-title font-bold text-wetCoral md:text-section-subheader md:leading-[44px]">
            Tell us about your event
          </h2>
          <p className="pt-[24px] pb-[40px] max-w-438px tracking-tight pt-[40px] max-w-[438px] text-center mx-auto px-[16px] font-text text-paragraph-lg leading-[28px] font-normal text-lightBlack md:py-[32px] md:text-paragraph-sm md:leading-[24px]">
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
