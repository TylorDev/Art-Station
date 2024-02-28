import { NavLink } from "react-router-dom";
import { IoHome,  IoSearch, IoGameControllerSharp, IoImages, IoPerson, IoSunnyOutline, IoMail, IoSettings, IoPower} from "react-icons/io5";
export const Header = () => {
  return (
    <header className="header">
      <nav className="navbarConteiner">
        <ul className="elements">
          <li className="element">
            <button><IoSearch /></button>
          </li>
          <li className="element">
            <button><IoGameControllerSharp /></button>
          </li>
          <li className="element">
            <button><IoImages/></button>
          </li>
          <li className="element">
            <button><IoPerson/></button>
          </li>
          <li className="element">
            <NavLink className="nav-link" to="/"> <IoHome /> Home</NavLink>
          </li>
          <li className="element">

            <button><IoSunnyOutline></IoSunnyOutline></button>
          </li>
          <li className="element">
            <button><IoMail/></button>
          </li>
          <li className="element">
            <button><IoSettings/></button>
          </li>
          <li className="element">
            <button><IoPower/></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
