import "./Header.css";
import EES from "../../images/EES.svg";
import { Link } from "react-router-dom";
export function Header () {
    return (
        <div className="header"> 
            <Link to="/">
            {/* run npm run storybook:node16 */}
             {/* http://localhost:6006/iframe.html?id=components-header--default */}
            <img className="header__logo" src={EES} alt="EES Logo"></img>
            </Link>
            <ol className="header__navbar">
                <li className="header__navbar-item" onClick={() => console.log('clicked about us')}>About us</li>
                <li className="header__navbar-item" onClick={() => console.log('clicked renting equipment')}>Renting equipment</li>
                <li className="header__navbar-item" onClick={() => console.log('clicked services')}>Staffing services</li>
                <li className="header__navbar-item" onClick={() => console.log('clicked contact')}>Contact</li>
            </ol>
        </div>
    )
}