
import { NavLink } from "react-router-dom";
import {
  IoHome,
  IoSearch,
  IoGameControllerSharp,
  IoImages,
  IoPerson,
  IoSunnyOutline,
  IoMail,
  IoSettings,
  IoPower,
  IoMoon
} from "react-icons/io5";
import { useState } from "react";




export const Header = ({darkTheme=false, setDarkTheme}) => {
  
  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme) {
      document.body.setAttribute('theme', 'dark');
    } else {
      document.body.removeAttribute('theme');
    }
  };
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="list">
          <li className="element">
            <button className="btn-icon" title="undefined">
              <IoSearch />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon" title="undefined">
              <IoGameControllerSharp />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon"  title="undefined">
              <IoImages /> 
            </button>
          </li>
          <li className="element">
            <button className="btn-icon" title="undefined">
              <IoPerson />  
            </button>
          </li>
          <li className="element">
            <button className="btn-icon"  title="Home"> 
                <IoHome /> Home
            </button>
          </li>
          <li className="element">
            <button  className="btn-icon"  onClick={toggleDarkTheme} title="Change Theme">
              {darkTheme?<IoSunnyOutline></IoSunnyOutline>: <IoMoon />}
            </button>
          </li>
          <li className="element" title="undefined">
            <button className="btn-icon">
              <IoMail />
            </button>
          </li>
          <li className="element" title="undefined">
            <button className="btn-icon">
              <IoSettings />
            </button>
          </li>
          <li className="element" title="undefined">
            <button className="btn-icon">
              <IoPower />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
