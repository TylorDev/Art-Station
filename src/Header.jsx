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
} from "react-icons/io5";
export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="list">
          <li className="element">
            <button className="btn-icon">
              <IoSearch />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoGameControllerSharp />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoImages />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoPerson /> 
            </button>
          </li>
          <li className="element">
            <button className="btn-icon"  title="Este es un tooltip personalizado"> 
                <IoHome /> Home
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoSunnyOutline></IoSunnyOutline>
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoMail />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoSettings />
            </button>
          </li>
          <li className="element">
            <button className="btn-icon">
              <IoPower />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
