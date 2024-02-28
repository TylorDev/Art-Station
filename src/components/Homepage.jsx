import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
import { CoverComp } from "./CoverComp";
export const Homepage = () => {
  return (
    <div className="HomePage">
      <div className="Articles">
        <div className="row1">
          <div className="column">
            <ColiderComp>
              <TabComponent />

            </ColiderComp>
          </div>
          <div className="column">
            <ColiderComp>
              <TabComponent />
            </ColiderComp>
          </div>
          <div className="column">
            <ColiderComp>
              <TabComponent />
            </ColiderComp>
          </div>
        </div>
        <div className="row2">
        <div className="column">
            <ColiderComp>
              <TabComponent Ancho={300} />
            </ColiderComp>
          </div>
          <div className="column">
            <ColiderComp>
              <TabComponent Ancho={300} />
            </ColiderComp>
          </div>
        </div>
        <div className="row1">
          <div className="column">
            <ColiderComp>
              <TabComponent />
            
            </ColiderComp>
          </div>
          <div className="column">
            <ColiderComp>
              <TabComponent />
            </ColiderComp>
          </div>
          <div className="column">
            <ColiderComp>
              <TabComponent />
            </ColiderComp>
          </div>
        </div>
      </div>
      <div className="Covers">
        
        <CoverComp></CoverComp>
      </div>

    </div>
  );
};
