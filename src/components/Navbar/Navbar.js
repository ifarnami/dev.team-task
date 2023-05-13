import "./Navbar.css";
import arrow from "../../Assets/arrow.svg";

function Navbar() {
  return (
    <nav className="navbar flex-between-center">
      <a className="brand" href="#">
        Dev. Team
      </a>

      <ul className="links flex-between-center">
        <li className="link flex-center-center">
          Fields <img src={arrow} alt="arrow" style={{ width: "10px" }} />
        </li>
        <li className="link flex-center-center">
          Technologies <img src={arrow} alt="arrow" style={{ width: "10px" }} />
        </li>
        <li className="link">About</li>
        <li className="link">Contact Us</li>
      </ul>

      <ul className="langs flex-center-center">
        <li className="lang">
          <a href="#">فارسی/</a>
        </li>
        <li className="lang">
          <a href="#">English</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
