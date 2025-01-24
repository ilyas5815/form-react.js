import React, { Profiler } from "react";
import './Header.scss';
import logo from "../../images/logo-removebg.png";
import hamburgerIcon from "../../images/hamburger.svg";
import searchIcon from "../../images/search.svg";
import Profile from '../../images/profile.svg';
import portal from '../../images/portal.svg';

const Header = ()=> {
    return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-box" />
          <img src={searchIcon} alt="Menu" />
        </div>
        <div>
            <img src={portal} alt="portal" />
        </div>
        <div>
            <img src={Profile} alt="profile" />
        </div>
        <div>
          <img src={hamburgerIcon} alt="Menu" />
        </div>
      </div>
    </header>
    );
};


export default Header;


