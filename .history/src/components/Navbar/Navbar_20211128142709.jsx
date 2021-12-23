import logo from '../../assets/logo.svg'

const Navbar = () => {
  return <div>
      <img src={logo} alt="logo.svg" />
      <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Supports</li>
      </ul>
  </div>;
};

export default Navbar;
