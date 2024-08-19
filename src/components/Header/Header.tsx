import "./Header.css";
import EES from "../../images/EES.svg";
import { Link } from "react-router-dom";
export function Header () {
    return (
        <div className="header"> 
            <Link to="/">
            {/* run npm run storybook:node16 */}
             {/* http://localhost:6006/iframe.html?id=components-header--default */}
            <img className="header-logo" src={EES} alt="EES Logo"></img>
            </Link>
            <ol className="header-navbar">
                <li className="header-navbar-item">About us</li>
                <li className="header-navbar-item">Renting equipment</li>
                <li className="header-navbar-item">Staffing services</li>
                <li className="header-navbar-item">Contact</li>
            </ol>
        </div>
    )
}