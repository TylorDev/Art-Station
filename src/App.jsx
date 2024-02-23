import "./App.scss";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";

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

