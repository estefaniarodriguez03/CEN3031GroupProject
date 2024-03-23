import React from 'react';
import './styles.css'; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo"><i className="fa-solid fa-dog"></i> Helping Hands</a>
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
            <a href="/" className="navbar__links"> Adoptable Dogs </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links"> Donate </a>
          </li>
          <li className="navbar__btn">
            <a href="/" className="button">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Homepage() {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <h1>Welcome to Helping Hands Pet Rescue!</h1>
          <div className="main_img--container">
            <img src="dogwalker.svg" alt="pic" id="main__img" />
          </div>
          <a href="/" className="main__btn">Events</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
