import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
export const Homepage = () => {

  return (
    <div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px",

        }}
      >

        <ColiderComp>
         <TabComponent ></TabComponent>
        </ColiderComp>
     
       
       
  
    

      </div>
  
      
    </div>
  );
};


