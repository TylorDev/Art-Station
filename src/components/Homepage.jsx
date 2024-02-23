import { useState, useEffect } from "react";
import { ColiderComp } from "./ColiderComp";
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
        <ColiderComp >
          <ResizableBox img="https://i.pinimg.com/736x/03/c5/48/03c548bf887b56b15d1c2e6d51e72cc8.jpg"></ResizableBox>
        </ColiderComp>

        <ColiderComp >
          <ResizableBox img="https://i.pinimg.com/564x/b5/0c/d9/b50cd94ee9d9dabbbc0fe0d8aa6f44c7.jpg"></ResizableBox>
        </ColiderComp>

        <ColiderComp >
          <ResizableBox img="https://i.pinimg.com/564x/24/ca/d4/24cad492a917c37eea7a646a1c08a73d.jpg"></ResizableBox>
        </ColiderComp>
    
        <ColiderComp >
          <ResizableBox img="https://i.pinimg.com/564x/cb/c6/0d/cbc60deb39f7167fd85fac191e4b3071.jpg"></ResizableBox>
        </ColiderComp>
  
    

      </div>
  
      
    </div>
  );
};

function ResizableBox({
  img = "https://i.pinimg.com/236x/f9/27/45/f9274559d9e31514e7d66518b71e9df7.jpg",
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
      console.log('El contenedor tiene la clase "left".');
      setIsleft(true);
    } else {
      console.log('El contenedor NO tiene la clase "left".');
      setIsleft(false);
    }
  };

  return (
    <div className="resizable-box" style={{ width: `${width}px` }}>
      <div className="tabConteiner">
        <div className="tabName"></div>
        <div className="tabContent">
          <div className="resize-handler left" onMouseDown={startResize} />
          <img className="image" src={img} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            ipsam velit sint pariatur quidem doloremque, iste icum ducimus
            laboriosam.
          </p>
          <div className="resize-handler right" onMouseDown={startResize} />
        </div>
      </div>
    </div>
  );
}
