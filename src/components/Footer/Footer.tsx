import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="flex w-full bg-wheat p-[80px] gap-[40px] sm:flex-col sm:p-[16px] sm:gap-[26px]">
      <div className="flex flex-col gap-[40px] sm:gap-[26px]">
        <div className="flex flex-col gap-[24px]">
          <p className="font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:font-text sm:font-normal sm:leading-[26px] sm:tracking-[-0.02em] sm:text-center ">
            Expert Event Solutions
          </p>
          <p
            className="font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:font-text sm:font-normal sm:leading-[26px] sm:tracking-[-0.02em] sm:text-center  cursor-pointer"
            onClick={() => console.log("clicked address")}
          >
            260 Daytona Blvd, Daytona <br /> Beach, Florida 32114, United <br />{" "}
            States
          </p>
          <p
            className="font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:font-text sm:font-normal sm:leading-[26px] sm:tracking-[-0.02em] sm:text-center  cursor-pointer"
            onClick={() => console.log("clicked email")}
          >
            Info@experteventsolutions.com
          </p>
        </div>

        <p className="font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:font-text sm:font-normal sm:leading-[26px] sm:tracking-[-0.02em] sm:text-center ">
          Copyright © 2022. Expert Event Solutions - All rights reserved.
        </p>
      </div>

      <div className="flex flex-col gap-[24px]">
        <p
          className="font-text text-paragraph-sm sm:hidden"
          onClick={() => console.log("clicked contacts")}
        >
          Contacts
        </p>
        <p
          className="font-text text-paragraph-sm sm:hidden"
          onClick={() => console.log("clicked rental conditions")}
        >
          Rental Conditions
        </p>

        <div className="flex flex-wrap flex-col gap-[10px] sm:content-center">
          <p className="font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:font-text sm:font-normal sm:leading-[26px] sm:tracking-[-0.02em] sm:text-center ">
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
    </footer>
  );
};
