import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-content">
        <img src={logo} alt="footerLogo.svg" className="logo" />
      </div>
      <div className="right-content">
        <p className="copy">
          &copy;{`  ${new Date().getFullYear()} Loopstudios | All Rights Reserved`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
