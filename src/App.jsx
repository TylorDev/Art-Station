import "./App.scss";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
       <div className="Frame">
          <div className="Frame inner"></div>
        </div>
      
      
    
      <div className="App">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Header>
        <Routes>
          <Route path="/Art-Station" exact element={<Homepage darkTheme={darkTheme} />} />
          <Route path="/about" exact element={<Contact />} />
          <Route path="/contact" exact element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
