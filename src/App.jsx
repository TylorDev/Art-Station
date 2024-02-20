import "./App.scss";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Routes, Route,NavLink } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about"  exact element={<Contact/>} />
        <Route path="/contact" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
const Header = () => {
  return (
    <header className="header">
      <h1>¡Bienvenido!</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/about">Acerca de</NavLink></li>
          <li><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
