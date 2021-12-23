import logo from "../../assets/logo.svg";
import hamburger from '../../assets/icon-hamburger.svg'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="logo.svg" />

      <ul className="nav-items">
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
  );
};

export default Navbar;
