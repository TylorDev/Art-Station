import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="conteiner">
      <Header></Header>
      <label>四宮 かぐや</label>
      <img className="Kaguya" src="src/assets/example.png" alt="" />
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
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Acerca de</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
