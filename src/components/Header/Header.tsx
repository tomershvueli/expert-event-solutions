import EES from "../../images/EES.svg";
import MenuIcon from "../../images/EESMenuIcon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  screenWidth?: "mobile" | "desktop";
}

export function Header({ screenWidth }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [showMenuIcon, setShowMenuIcon] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const isMobile = screenWidth === "mobile";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setShowMenuIcon(width < 600 ? true : false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 flex justify-between items-center w-full h-[74px] pt-[42px] pb-[34px] lg:px-[25px] bg-wheat
          border-x-4 border-transparent
          ${
            showMenu && windowWidth < 600
              ? "border-x-lightGingerFlower border-x-4"
              : ""
          }
          ${windowWidth < 600 ? "px-[8px] py-[8px]" : ""}
          ${
            isMobile
              ? "px-[8px] py-[8px] border-x-lightGingerFlower border-x-4"
              : "px-[128px] py-[80px]"
          }
          `}
      >
        <Link to="/">
          <img
            src={EES}
            alt="EES Logo"
            className={`lg:w-[75px]${
              windowWidth < 600 ? "w-[51px] mx-[8.4px] my-[6.3px]" : ""
            }
              ${isMobile ? "w-[51px] mx-[8.4px] my-[6.3px]" : ""}`}
          ></img>
        </Link>
        <ul className="flex justify-between items-center p-0 m-0 gap-[20px]">
          {showMenuIcon || isMobile ? (
            <button onClick={() => setShowMenu(!showMenu)}>
              <img
                src={MenuIcon}
                alt="Menu Icon"
                className="px-[12px] py-[23px]"
              ></img>
            </button>
          ) : (
            <>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer lg:text-[18px]"
                onClick={() => console.log("clicked about us")}
              >
                About us
              </a>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer lg:text-[18px]"
                onClick={() => console.log("clicked renting equipment")}
              >
                Renting equipment
              </a>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer lg:text-[18px]"
                onClick={() => console.log("clicked services")}
              >
                Staffing services
              </a>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer lg:text-[18px]"
                onClick={() => console.log("clicked contact")}
              >
                Contact
              </a>
            </>
          )}
        </ul>
      </div>
      {(showMenu && windowWidth < 600) || isMobile ? (
        <div
          className="fixed z-10 left-0 right-0 top-[76px] flex flex-col gap-[20px] bg-wheat border-b-4 border-x-4 border-lightGingerFlower
            rounded-b-[80px]"
        >
          <div className="flex flex-col gap-[20px] pt-[100px] pb-[190px]">
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-lightGingerFlower"
              onClick={() => console.log("clicked about us")}
            >
              About us
            </a>
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-lightGingerFlower"
              onClick={() => console.log("clicked renting equipment")}
            >
              Renting equipment
            </a>
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-lightGingerFlower"
              onClick={() => console.log("clicked services")}
            >
              Staffing services
            </a>
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-lightGingerFlower"
              onClick={() => console.log("clicked contact")}
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
