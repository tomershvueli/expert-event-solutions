import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import { useQuery } from "@apollo/client";
import { GetCompanyContactInfo } from "../../graphql/get-company-contact-info";
interface Props {
  screenWidth?: "mobile" | "desktop";
}

export const Footer = ({ screenWidth = "desktop" }: Props) => {
  const isMobile = screenWidth === "mobile";

  function useCompanyContactInfo() {
    const { loading, error, data } = useQuery(GetCompanyContactInfo);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return data ? data.companyContactInfos : null;
  }

  const companyContactInfo = useCompanyContactInfo();

  return (
    <footer
      className={`flex w-full flex-col bg-wheat p-[80px] gap-[40px] md:px-[16px] sm:self-center
        ${
          isMobile
            ? "p-[16px] gap-[26px]"
            : "p-[80px] gap-[40px] sm:p-[16px] sm:gap-[26px]"
        }`}
    >
      <div
        className={`flex flex-row gap-[287px] lg:gap-[190px] md:gap-[100px] sm:gap-[26px] sm:flex-col sm:max-w-fit sm:self-center ${
          isMobile ? "flex-col !gap-[26px]" : "flex-row"
        }`}
      >
        {companyContactInfo && companyContactInfo[0] ? (
          <div
            className={`flex flex-col gap-[40px] sm:gap-[26px] ${
              isMobile ? "gap-[26px]" : "gap-[40px]"
            }`}
          >
            <div className="flex flex-col gap-[24px] ">
              <p
                className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center ${
                  isMobile ? "text-center" : "text-left"
                }`}
              >
                {companyContactInfo ? companyContactInfo[0]?.companyName : ""}
              </p>
              <a
                className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center cursor-pointer w-[271px] ${
                  isMobile ? "text-center" : "text-left"
                }`}
                onClick={() => {}}
              >
                {companyContactInfo ? companyContactInfo[0]?.address : ""}
              </a>
              <a
                className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center cursor-pointer ${
                  isMobile ? "text-center" : "text-left"
                }`}
                onClick={() => {}}
                href="mailto:Info@experteventsolutions.com"
              >
                {companyContactInfo ? companyContactInfo[0]?.contactEmail : ""}
              </a>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-[24px]">
          <p
            className={`font-text text-paragraph-sm sm:hidden ${
              isMobile ? "hidden" : "block"
            }`}
            onClick={() => {}}
          >
            Contacts
          </p>
          <p
            className={`font-text text-paragraph-sm sm:hidden ${
              isMobile ? "hidden" : "block"
            }`}
            onClick={() => {}}
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
            <div className="flex flex-row gap-[10px] ">
              <img
                className="cursor-pointer"
                src={instagram}
                onClick={() => {}}
                alt="Instagram"
              />
              <img
                className="cursor-pointer"
                src={facebook}
                onClick={() => {}}
                alt="Facebook"
              />
              <img
                className="cursor-pointer"
                src={linkedin}
                onClick={() => {}}
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>

      <p
        className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center sm:text-wrap ${
          isMobile ? "text-center" : "text-left"
        }`}
      >
        Copyright © {new Date().getFullYear()}.{" "}
        {companyContactInfo ? companyContactInfo[0]?.companyName : ""} - All
        rights reserved.
      </p>
    </footer>
  );
};
