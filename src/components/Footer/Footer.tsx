import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import { gql, useQuery } from "@apollo/client";

interface Props {
  screenWidth?: "mobile" | "desktop";
}

export const Footer = ({ screenWidth = "desktop" }: Props) => {
  const isMobile = screenWidth === "mobile";

  const GetCompanyContactInfo = gql`
    query GetCompanyContactInfo {
      companyContactInfos {
        companyName
        contactName
        contactEmail
        contactPhone
        isPrimaryContact
        country
        city
        address
        createdAt
        updatedAt
        status
      }
    }
  `;

  function useCompanyContactInfo() {
    const { loading, error, data } = useQuery(GetCompanyContactInfo);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    console.log("Response data:", data); // Log the entire response
    return data ? data.companyContactInfos : null;
  }

  const companyContactInfo = useCompanyContactInfo();
  console.log(companyContactInfo);

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
              {companyContactInfo[0].companyName}
            </p>
            <a
              className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center cursor-pointer w-[271px] ${
                isMobile ? "text-center" : "text-left"
              }`}
              onClick={() => console.log("clicked address")}
            >
              {companyContactInfo[0].address}
            </a>
            <p
              className={`font-text text-paragraph-sm font-normal leading-[26px] tracking-[-0.02em] text-left sm:text-center cursor-pointer ${
                isMobile ? "text-center" : "text-left"
              }`}
              onClick={() => console.log("clicked email")}
            >
              {companyContactInfo[0].contactEmail}
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
            <div className="flex flex-row gap-[10px] ">
              <img
                className="cursor-pointer"
                src={instagram}
                onClick={() => console.log("clicked instagram")}
                alt="Instagram"
              />
              <img
                className="cursor-pointer"
                src={facebook}
                onClick={() => console.log("clicked facebook")}
                alt="Facebook"
              />
              <img
                className="cursor-pointer"
                src={linkedin}
                onClick={() => console.log("clicked linkedin")}
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
        Copyright © 2022. {companyContactInfo?.[0]?.companyName} - All rights
        reserved.
      </p>
    </footer>
  );
};
