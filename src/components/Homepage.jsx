import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
import { CoverComp } from "./CoverComp";
import { imagenes } from "./imagenes.js";


export const Homepage = ({ darkTheme }) => {


  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  }

  return (

    
    <div className="Homepage">
      <div className="container-flex">
        {imagenes.map((imagen, index) => (
          <TabComponent
            key={index}
            img={imagen.imageUrl}
            titulo={imagen.title}
            contenido={imagen.content}
            maxHeight = {generateRandomNumber(28,41)}
          ></TabComponent>
        ))}
      </div>

      <CoverComp darkTheme={darkTheme}></CoverComp>
    </div>
  );
};
