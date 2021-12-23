import closeIcon from "../../assets/icon-close.svg";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <aside>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo-sb" />
          <button className="close-btn" type="button">
            <img src={closeIcon} alt="closeIcon.svg" />
          </button>
        </div>
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
      </aside>
    </div>
  );
};

export default Sidebar;
