import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="logo.svg" />
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Navbar;
