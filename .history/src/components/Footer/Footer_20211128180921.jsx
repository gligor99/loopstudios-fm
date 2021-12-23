import "./footer.css";
import logo from "../../assets/logo.svg";
import fb from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twittter from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-content">
        <img className="logo" src={logo} alt="footerLogo.svg" />
        <ul className="links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
      </div>
      <div className="right-content">
        <div className="social">
          <img className='social-icon' src={fb} alt="fbIcon.svg" />
          <img src={instagram} alt="instaIcon.svg" />
          <img src={pinterest} alt="pinterestIcon.svg" />
          <img src={twittter} alt="twitterIcon.svg" />
        </div>
        <p className="copy">
          &copy;
          {`  ${new Date().getFullYear()} Loopstudios | All Rights Reserved`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
