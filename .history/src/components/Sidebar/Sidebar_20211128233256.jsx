import closeIcon from "../../assets/icon-close.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <aside>
        <div className="sidebar-header">
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
