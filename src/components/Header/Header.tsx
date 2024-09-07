import EES from "../../images/EES.svg";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="flex justify-between items-center w-full h-[74px] px-[128px] py-[80px] bg-wheat">
      <Link to="/">
        <img src={EES} alt="EES Logo"></img>
      </Link>

      <ul className="flex justify-between items-center p-0 m-0 gap-[20px]">
        <a
          className="font-text text-paragraph-sm font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked about us")}
        >
          About us
        </a>
        <a
          className="font-text text-paragraph-sm font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked renting equipment")}
        >
          Renting equipment
        </a>
        <a
          className="font-text text-paragraph-sm font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked services")}
        >
          Staffing services
        </a>
        <a
          className="font-text text-paragraph-sm font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked contact")}
        >
          Contact
        </a>
      </ul>
    </div>
  );
}
