import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
import { CoverComp } from "./CoverComp";
import { imagenes } from "./imagenes.js";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="container-flex">
        {imagenes.map((imagen, index) => (
          <TabComponent
            img={imagen.imageUrl}
            titulo={imagen.title}
          ></TabComponent>
        ))}
      </div>
          <CoverComp></CoverComp>
    </div>
  );
};
