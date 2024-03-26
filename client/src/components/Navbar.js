import { NavLink } from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'





export default function Navbar() {
  const element = <FontAwesomeIcon icon={faPaw} />
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo"><div className="paw">{element}</div> Helping Hands</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links"> Home </a>
          </li>
          <li className="navbar__item">
            <a href="/tech.html" className="navbar__links"> Pawfect Match </a>
          </li>
          <li className="navbar__item">
            <NavLink to= "/adoptabledogs">
            <a href="/" className="navbar__links"> Adoptable Dogs </a>
            </NavLink>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links"> Donate </a>
          </li>
          <li className="navbar__btn">
          <NavLink to= "/signin">
            <a href="/" className="button">Sign In</a>
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}/*function Navbar() {
  return (
    <div className = "headerbar">
      <nav className="home">
        <NavLink to= "/">
        <h1>
            Helping Hands
        </h1>
        </NavLink>
        
      </nav>
    </div>
  );
}*/

