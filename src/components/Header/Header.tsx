import EES from "../../images/EES.svg";
import MenuIcon from "../../images/EESMenuIcon.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [showMenuIcon, setShowMenuIcon] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width); // Track window width
      setShowMenuIcon(width < 800 ? true : false);
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
        className={`flex justify-between items-center w-full h-[74px] px-[128px] py-[80px] bg-wheat
          border-x-4 border-transparent
          ${showMenu && windowWidth < 800 ? "border-x-red border-x-4" : ""}
          ${windowWidth < 800 ? "px-[8px] py-[8px]" : ""}`}
      >
        <Link to="/">
          {/* showMenu then add className with border-x-red */}
          <img
            src={EES}
            alt="EES Logo"
            className={`${ windowWidth < 800 ? "w-[51px] mx-[8.4px] my-[6.3px]" : "" }`}
          ></img>
        </Link>
        <ul className="flex justify-between items-center p-0 m-0 gap-[20px]">
          {showMenuIcon ? (
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
                  cursor-pointer"
                onClick={() => console.log("clicked about us")}
              >
                About us
              </a>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer"
                onClick={() => console.log("clicked renting equipment")}
              >
                Renting equipment
              </a>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer"
                onClick={() => console.log("clicked services")}
              >
                Staffing services
              </a>
              <a
                className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                  cursor-pointer"
                onClick={() => console.log("clicked contact")}
              >
                Contact
              </a>
            </>
          )}
        </ul>
      </div>
      {showMenu && windowWidth < 800 ? (
        <div
          className="flex flex-col gap-[20px] bg-wheat border-b-4 border-x-4 border-red
            rounded-b-[80px]"
        >
          <div className="flex flex-col gap-[20px] pt-[100px] pb-[190px]">
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-red"
              onClick={() => console.log("clicked about us")}
            >
              About us
            </a>
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-red"
              onClick={() => console.log("clicked renting equipment")}
            >
              Renting equipment
            </a>
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-red"
              onClick={() => console.log("clicked services")}
            >
              Staffing services
            </a>
            <a
              className="font-text text-paragraph-sm font-medium leading-[18px] text-center
                cursor-pointer text-red"
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
