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
    <div className="App"  >
      <div className="Frame">  
          <div className="Frame inner"></div>
       </div>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Header>
      <Routes>
        <Route path="/" exact element={<Homepage darkTheme={darkTheme} />} />
        <Route path="/about" exact element={<Contact />} />
        <Route path="/contact" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

