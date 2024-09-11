import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";

interface Props {
  screenWidth?: "mobile" | "desktop";
}

export const Footer = ({ screenWidth = "desktop" }: Props) => {
  const isMobile = screenWidth === "mobile";

  return (
    <footer
      className={`flex w-full flex-col bg-wheat p-[80px] gap-[40px] sm:p-[16px] sm:gap-[26px] ${
        isMobile ? "p-[16px] gap-[26px]" : "p-[80px] gap-[40px]"
      }`}
    >
      <div
        className={`flex flex-row gap-[287px] sm:gap-[26px] sm:flex-col ${
          isMobile ? "flex-col gap-[26px]" : "flex-row gap-[287px]"
        }`}
      >
        <div
          className={`flex flex-col gap-[40px] sm:gap-[26px] ${
            isMobile ? "gap-[26px]" : "gap-[40px]"
          }`}
        >
          <div className="flex flex-col gap-[24px]">
            <p
              className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center ${
                isMobile ? "text-center" : "text-left"
              }`}
            >
              Expert Event Solutions
            </p>
            <a
              className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center cursor-pointer ${
                isMobile ? "text-center" : "text-left"
              }`}
              onClick={() => console.log("clicked address")}
            >
              260 Daytona Blvd, Daytona <br /> Beach, Florida 32114, United{" "}
              <br /> States
            </a>
            <p
              className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center cursor-pointer ${
                isMobile ? "text-center" : "text-left"
              }`}
              onClick={() => console.log("clicked email")}
            >
              Info@experteventsolutions.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <p
            className={`font-text text-paragraph-sm sm:hidden ${
              isMobile ? "hidden" : "block"
            }`}
            onClick={() => console.log("clicked contacts")}
          >
            Contacts
          </p>
          <p
            className={`font-text text-paragraph-sm sm:hidden ${
              isMobile ? "hidden" : "block"
            }`}
            onClick={() => console.log("clicked rental conditions")}
          >
            Rental Conditions
          </p>

          <div
            className={`flex flex-wrap flex-col gap-[10px] sm:content-center ${
              isMobile ? "content-center" : "content-start"
            }`}
          >
            <p
              className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center ${
                isMobile ? "text-center" : "text-left"
              }`}
            >
              Social Media
            </p>
            <div className="flex flex-row gap-[10px] cursor-pointer">
              <img
                src={instagram}
                onClick={() => console.log("clicked instagram")}
                alt="Instagram"
              />
              <img
                src={facebook}
                onClick={() => console.log("clicked facebook")}
                alt="Facebook"
              />
              <img
                src={linkedin}
                onClick={() => console.log("clicked linkedin")}
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>

      <p
        className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center ${
          isMobile ? "text-center" : "text-left"
        }`}
      >
        Copyright © 2022. Expert Event Solutions - All rights reserved.
      </p>
    </footer>
  );
};
