import "./Navbar.css";
import "./dropdownmenu.css";
import arrow from "../../Assets/arrow.svg";

function dropDownHandler(event) {}

function Navbar() {
  return (
    <nav className="navbar flex-between-center">
      <a className="brand" href="#">
        Dev. Team
      </a>

      <ul className="links flex-between-center">
        <li className="link flex-center-center dropdown-container">
          Fields <img src={arrow} alt="arrow" style={{ width: "10px" }} />
          <div className="dropdownmenu">
            <a href="#" className="dropdown-link">
              Front-End
            </a>
            <a href="#" className="dropdown-link">
              Back-End
            </a>
            <a href="#" className="dropdown-link">
              Mobile App
            </a>
            <a href="#" className="dropdown-link">
              Network
            </a>
            <a href="#" className="dropdown-link">
              Security
            </a>
            <a href="#" className="dropdown-link">
              IOT
            </a>
          </div>
        </li>
        <li
          onClick={dropDownHandler}
          className="link flex-center-center dropdown-container"
        >
          Technologies <img src={arrow} alt="arrow" style={{ width: "10px" }} />
          <div className="dropdownmenu-lg">
            <a href="#" className="dropdown-link">
              ReactJS
            </a>
            <a href="#" className="dropdown-link">
              Vue.JS
            </a>
            <a href="#" className="dropdown-link">
              Angular
            </a>
            <a href="#" className="dropdown-link">
              Node.js
            </a>
            <a href="#" className="dropdown-link">
              React Native
            </a>
            <a href="#" className="dropdown-link">
              Flutter
            </a>
            <a href="#" className="dropdown-link">
              .Net
            </a>
            <a href="#" className="dropdown-link">
              PHP(Laravel)
            </a>
            <a href="#" className="dropdown-link">
              Python(Django)
            </a>
            <a href="#" className="dropdown-link">
              Kali Linux
            </a>
            <a href="#" className="dropdown-link">
              Apache
            </a>
            <a href="#" className="dropdown-link">
              NGINX
            </a>
          </div>
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
