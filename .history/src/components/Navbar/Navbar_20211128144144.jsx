import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="logo.svg" />
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
          <a href="/Products">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
