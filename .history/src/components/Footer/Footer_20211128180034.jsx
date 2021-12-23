import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-content">
        <img src={logo} alt="footerLogo.svg" className="logo" />
        <ul>
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
        <p className="copy">
          &copy;
          {`  ${new Date().getFullYear()} Loopstudios | All Rights Reserved`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
