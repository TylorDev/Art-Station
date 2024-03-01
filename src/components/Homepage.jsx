import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
import { CoverComp } from "./CoverComp";
import { imagenes } from "./imagenes.js";

export const Homepage = ({darkTheme}) => {
  return (
    <div className="Homepage">
      <div className="container-flex">
        {imagenes.map((imagen, index) => (
          <TabComponent key={index}
            img={imagen.imageUrl}
            titulo={imagen.title}
            contenido = {imagen.content}
          ></TabComponent>
        ))}
      </div>
          <CoverComp darkTheme={darkTheme}></CoverComp>
    </div>
  );
};
