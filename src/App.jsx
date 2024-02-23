import "./App.scss";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

function App() {
useState(0)
  return (
    <div className="App" >
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<Contact />} />
        <Route path="/contact" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
const Header = () => {
  return (
    <header className="header">
      <nav className="navbarConteiner">
        <ul className="elements">
          <li classname="element" >
            <button>CA</button>
          </li>
          <li className="element" >
            <button>CA</button>
          </li>
          <li className="element" >
            <button>CA</button>
          </li>
          <li className="element" >
            <button>CA</button>
          </li>
          <li className="element" >
            <NavLink  className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="element" >
            
            <button>AB</button>
          </li>
          <li className="element" >
            <button>AB</button>
          </li>
          <li className="element" >
            <button>AB</button>
          </li>
          <li className="element" >
            <button>AB</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
