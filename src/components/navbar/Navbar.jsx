import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../assets/GPT-3.png";

const Menus = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#GPT">What is GPT</a>
      </p>
      <p>
        <a href="#OpenAI">OpenAI</a>
      </p>
      <p>
        <a href="#CaseStudies">Case Studies</a>
      </p>
      <p>
        <a href="#Library">Library</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <Menus/>
        </div>
      </div>
      <div className="navbar-sign">
        <p className="nav-sign">Sign in</p>
        <button type="button" className="btn-primary">Sign up</button>
      </div>
      <div className="navbar-responsive-menu">
        {navMenu ? (
          <RiCloseLine onClick={() => setNavMenu(false)} />
        ) : (
          <RiMenu3Line onClick={() => setNavMenu(true)} />
        )}
        {navMenu && (
          <div className="navbar-links-container scale-nav">
            <div className="navbar-menu-links-container">
              <div className="gpt3-menu">
              <Menus />
              <div className="navbar-sign-mobile">
                <p className="nav-sign">Sign in</p>
                <button type="button" className="btn-primary">Sign up</button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
