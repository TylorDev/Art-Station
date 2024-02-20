import { useEffect, useState, useRef } from "react";

export const Homepage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      <MouseProvider></MouseProvider>
      </div>
    </div>
  );
};

const MouseProvider = () => {
  const [globalPosition, setGlobalPosition] = useState({ x: 0, y: 0 });
  const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(1);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = containerRef.current.getBoundingClientRect();

      setGlobalPosition({ x: clientX, y: clientY });
      setLocalPosition({
        x: Math.min(
          Math.max(clientX - left, imageRef.current.offsetWidth / 2),
          containerRef.current.offsetWidth -
            imageRef.current.offsetWidth +
            imageRef.current.offsetWidth / 2
        ),
        y: Math.min(
          Math.max(clientY - top, imageRef.current.offsetHeight / 2),
          containerRef.current.offsetHeight -
            imageRef.current.offsetHeight +
            imageRef.current.offsetHeight / 2
        ),
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const calculatePercentage = (position, containerSize) => {
    return {
      x: ((position.x / containerSize.width) * 100).toFixed(2),
      y: ((position.y / containerSize.height) * 100).toFixed(2),
    };
  };

  const containerSize = containerRef.current
    ? containerRef.current.getBoundingClientRect()
    : { width: 0, height: 0 };

  const globalPercentage = calculatePercentage(globalPosition, {
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const localPercentage = calculatePercentage(localPosition, containerSize);

  return (
    <div style={{ minWidth: "400px" }}>
      {/* <div>
        Pos (Global): X{globalPosition.x} Y{globalPosition.y}
      </div>
      <div>
        Pos porcentual  (Global): X{globalPercentage.x}%, <br /> Y global:{" "}
        {globalPercentage.y}%
      </div>
      <div>
        Pos "local"  (Useref): X{localPosition.x}  <br /> Y 
        {localPosition.y}
      </div>
    
      <div>
        Pos % local: {localPercentage.x}%, <br /> Y local:{" "}
        {localPercentage.y}%
      </div> */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid white",
          position: "relative",
        }}
      >
        <div
          ref={imageRef}
          style={{
            border: "1px solid white",
            position: "absolute",
            transform: `translate(${
              localPosition.x - imageRef.current.offsetWidth / 2}px, 
            ${localPosition.y - imageRef.current.offsetHeight / 2}px)`,
            transition: "all 1s"
          }}
        >
          <img
            style={{
              height: "200px",
            }}
            src="https://i.pinimg.com/236x/9f/40/2e/9f402e12cffbb9c380b28a93875ae6b3.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

const CenterMouseOnHover = () => {
  const containerRef = useRef(null);

  const handleMouseHover = (e) => {
    // Calcula la posición del mouse relativa al elemento que recibe el hover
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;
    const x = rect.left + offsetX;
    const y = rect.top + offsetY;

    // Mueve el mouse a la posición calculada
    window.scrollTo(x, y);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "lightgray",
        position: "relative",
      }}
      onMouseEnter={handleMouseHover} // Activar la función cuando el mouse entra en el elemento
    >
      {/* Contenido del componente */}
    </div>
  );
};
