import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-content">
        <img src={logo} alt="footerlogo.svg" className="logo" />
      </div>
      <div className="right-content"></div>
    </div>
  );
};

export default Footer;
