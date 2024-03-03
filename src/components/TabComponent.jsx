import { useState, useEffect, useRef } from "react";
import { ContentComp } from "./ContentComp";

export function TabComponent({
  img = "https://i.pinimg.com/236x/f9/27/45/f9274559d9e31514e7d66518b71e9df7.jpg",
  titulo,
  contenido,
  maxHeight
}) {

  const [show, setShow] = useState(true);
  const [random, setRandom]  = useState(true);



  useEffect(()=>{
    setRandom(maxHeight);

  },[])


  const principio = () => {
      if(show){
        containerRef.current.scrollTop = 0; 
      }

  };



  


  return (
    <div className="tab-box" style={{ overflowY:show?"hidden":"auto", maxHeight: `${maxHeight}rem`}}  /*ref={containerRef}*/  onScroll={principio} >
 
      <div className="topButtom">-</div>
      <ContentComp show={show} setShow={setShow} img={img} titulo={titulo}  contenido ={contenido}/>

   
   
    </div>
  );
}
