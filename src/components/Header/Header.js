import React from "react";
import "./Header.css";
import { cart, logo, searching, fav, profile } from "../../assets/images";

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <h1 className="logoimage">
          <a href="#" className="logo-link">
            <img src={logo} alt="Logo" />
          </a>
        </h1>
      </div>
      <div className="bar">
        <div className="search">
          <a href="#" className="search-link">
            <img src={searching} alt="Search" />
          </a>
        </div>
        <div className="cart">
          <a href="#" className="cart-link">
            <img src={cart} alt="Cart" />
          </a>
        </div>
        <div className="fav">
          <a href="#" className="fav-link">
            <img src={fav} alt="Fav" />
          </a>
        </div>
        <div className="profile">
          <a href="#" className="profile-link">
            <img src={profile} alt="Profile" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
