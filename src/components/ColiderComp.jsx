import { useEffect, useState, useRef } from "react";

export const ColiderComp = ({children}) => {
  const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(1);
  const [isHover, setIshover] = useState(false)

  const [ultimaPosicion, setUltimaPosicion] = useState({ x: 0, y: 0});
  useEffect(() => {
    const updateMousePosition = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = containerRef.current.getBoundingClientRect();

      setLocalPosition({
        x: Math.min(
          Math.max(clientX - left, imageRef.current.offsetWidth / 2),
          containerRef.current.offsetWidth -
          imageRef.current.offsetWidth +
          imageRef.current.offsetWidth / 2
        ),
        y: Math.min(
          Math.max(clientY - top, imageRef.current.offsetHeight / 25),
          containerRef.current.offsetHeight -
          imageRef.current.offsetHeight +
          imageRef.current.offsetHeight / 25
        ),
      });

      setUltimaPosicion(localPosition.x, localPosition.y)
 
      console.log(localPosition.y)
     
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);


  return (
    <div ref={containerRef} className="mainConteiner">
      <div
        className="imageConteiner"  
        ref={imageRef}
        style={{
          transform: isHover
            ? `translate(${localPosition.x - imageRef.current.offsetWidth / 2}px, ${localPosition.y - imageRef.current.offsetHeight / 25}px)`
            :`translate(${ultimaPosicion.x - imageRef.current.offsetWidth / 2}px, ${ultimaPosicion.y - imageRef.current.offsetHeight / 25}px)`,
      
        }}
      >
        <div className="hoverArea"  onMouseEnter={()=>{setIshover(true)}}  onMouseLeave={()=>{setIshover(false)}} onClick={()=>{setIshover(false)}}> 
           
        </div >

        {children}
        
      </div>
    </div>
  );
};
