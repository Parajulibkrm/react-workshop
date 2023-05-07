import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Notifications</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search Twitter" />
      </div>
    </nav>
  );
};

export default Navbar;
