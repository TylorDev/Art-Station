import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
import { CoverComp } from "./CoverComp";
export const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        width: "100%",
        marginTop: "5%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <div style={{ display: "flex" }}>
          <ColiderComp>
            <TabComponent></TabComponent>
          </ColiderComp>
          <ColiderComp>
            <TabComponent></TabComponent>
          </ColiderComp>
          <ColiderComp>
            <TabComponent></TabComponent>
          </ColiderComp>
        </div>
        <div style={{ display: "flex" }}>
          <ColiderComp>
            <TabComponent></TabComponent>
          </ColiderComp>

          <ColiderComp>
            <TabComponent></TabComponent>
          </ColiderComp>

          <ColiderComp>
            <TabComponent></TabComponent>
          </ColiderComp>
        </div>
      </div>

      <CoverComp></CoverComp>
    </div>
  );
};

