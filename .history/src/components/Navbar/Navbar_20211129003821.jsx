import logo from "../../assets/logo.svg";
import hamburger from '../../assets/icon-hamburger.svg'
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const  toggleHandler = () => {
    setToggle(!toggle)
  }

  const closeHandler = () => {
    setToggle(false)
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="logo.svg" />
      <img className="burger-icon" src={hamburger} alt="burgerIcon.svg" onClick={toggleHandler} />
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
