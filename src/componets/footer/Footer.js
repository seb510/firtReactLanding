import "./style.css"
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHab from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

function Footer () {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <img src={gitHab} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="Link"/>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© {year} frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;