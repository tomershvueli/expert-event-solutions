import "./Header.css";
import EES from "../../images/EES.svg";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="flex justify-between items-center w-full h-[74px] px-[128px] py-[80px] bg-wheat">
      <Link to="/">
        {/* run npm run storybook:node16 */}
        {/* http://localhost:6006/iframe.html?id=components-header--default */}
        <img src={EES} alt="EES Logo"></img>
      </Link>
      <ol className="flex justify-between items-center p-0 m-0 gap-[20px]">
        <li
          className="font-text text-[20px] font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked about us")}
        >
          About us
        </li>
        <li
          className="font-text text-[20px] font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked renting equipment")}
        >
          Renting equipment
        </li>
        <li
          className="font-text text-[20px] font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked services")}
        >
          Staffing services
        </li>
        <li
          className="font-text text-[20px] font-medium leading-[18px] text-center cursor-pointer"
          onClick={() => console.log("clicked contact")}
        >
          Contact
        </li>
      </ol>
    </div>
  );
}
