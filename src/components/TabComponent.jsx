import { useState, useEffect } from "react";
import { ContentComp } from "./ContentComp";

export function TabComponent({
  img = "https://i.pinimg.com/236x/f9/27/45/f9274559d9e31514e7d66518b71e9df7.jpg",
  titulo,
}) {
  const [width, setWidth] = useState(200); // Ancho inicial del componente
  const [isResizing, setIsResizing] = useState(false); // Estado para rastrear si se está arrastrando el manejador
  const [resizeStartX, setResizeStartX] = useState(0); // Posición inicial X del mouse al iniciar la redimensión
  const [isLeft, setIsleft] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isResizing) {
        const offsetX = event.clientX - resizeStartX;
        if (isLeft == false) {
          setWidth((prevWidth) => prevWidth + offsetX);
        } else {
          setWidth((prevWidth) => prevWidth - offsetX);
        }
        setResizeStartX(event.clientX);
      }
    };

    const stopResize = () => {
      setIsResizing(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResize);
    };
  }, [isResizing, resizeStartX]);

  const startResize = (event) => {
    setIsResizing(true);
    setResizeStartX(event.clientX);

    // Accede al elemento que lanzó el evento
    const container = event.target;

    // Obtén las clases del contenedor
    const classes = container.classList;

    // Verifica si el contenedor tiene la clase 'left'
    if (classes.contains("left")) {
      setIsleft(true);
    } else {
      setIsleft(false);
    }
  };
  const [show, setShow] = useState(true);
  return (
    <div className="tab-box" style={{ width: `${width}px` }}>
      <div className="borde left" onMouseDown={startResize} />
      <div className="topButtom">-</div>
      <ContentComp show={show} setShow={setShow} img={img} titulo={titulo} />

   
      <div className="borde right" onMouseDown={startResize} />
    </div>
  );
}
