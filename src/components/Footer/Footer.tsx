import './Footer.css';
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info-container"> 
            
            <div className="footer__info">
            <p className="footer__text">Expert Event Solutions</p>
            <p className="footer__text footer__text--address" onClick={() => console.log('clicked address')}>260 Daytona Blvd, Daytona <br/> Beach, Florida 32114, United <br/> States</p>
            <p className="footer__text footer__text--email" onClick={() => console.log('clicked email')}>Info@experteventsolutions.com</p>
            </div>

            <p className="footer__text">Copyright © 2022. Expert Event Solutions - All rights reserved.</p>

            </div>
            <div className="footer__social">
                <p className="footer__text footer__text--contacts" onClick={() => console.log('clicked contacts')}>Contacts</p>
                <p className="footer__text footer__text--rental-conditions" onClick={() => console.log('clicked rental conditions')}> Rental Conditions</p>

                <div className="footer__social-media"> 
                    <p className="footer__text">Social Media</p>
                    {/* socila media links/icons */}
                    <div className="footer__social-icons">
                    <img src={instagram} onClick={() => console.log('clicked instagram')}></img>
                    <img src={facebook} onClick={() => console.log('clicked facebook')}></img>
                    <img src={linkedin} onClick={() => console.log('clicked linkedin')}></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}