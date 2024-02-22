import { useState, useEffect } from "react";

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

        <ResizableBox img="https://i.pinimg.com/564x/24/ca/d4/24cad492a917c37eea7a646a1c08a73d.jpg"></ResizableBox>
        <ResizableBox img="https://preview.redd.it/a0ez44uhhx911.jpg?auto=webp&s=9f8a86024d45e3a74490d3d004a292a74fa88b8c"></ResizableBox>

        <ResizableBox img="https://i.pinimg.com/736x/bf/e6/88/bfe6880b5099c781cd70a8b09e1cbff8.jpg"></ResizableBox>
      </div>
    </div>
  );
};

function ResizableBox({
  img = "https://i.pinimg.com/236x/f9/27/45/f9274559d9e31514e7d66518b71e9df7.jpg",
}) {
  const [width, setWidth] = useState(400); // Ancho inicial del componente
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
        <div className="tabName">Details -  Detalles</div>
        <div className="tabContent">
          <div className="resize-handler left" onMouseDown={startResize} />
          <img className="image"src={img} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero facilis perspiciatis esse tenetur voluptates corrupti sunt sint repudiandae, quis itaque aperiam provident vel explicabo consectetur! At eligendi ipsum voluptatem.
          </p>

          
          <img className="image"src={img} alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero facilis perspiciatis esse tenetur voluptates corrupti sunt sint repudiandae, quis itaque aperiam provident vel explicabo consectetur! At eligendi ipsum voluptatem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere perspiciatis itaque ratione dolorem, illum maiores corporis quod molestiae aperiam minima deserunt, ducimus aliquam repudiandae, eius sit. Cum, eligendi aliquid?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero facilis perspiciatis esse tenetur voluptates corrupti sunt sint repudiandae, quis itaque aperiam provident vel explicabo consectetur! At eligendi ipsum voluptatem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere perspiciatis itaque ratione dolorem, illum maiores corporis quod molestiae aperiam minima deserunt, ducimus aliquam repudiandae, eius sit. Cum, eligendi aliquid?
          </p>

          <div className="resize-handler right" onMouseDown={startResize} />
        </div>
      </div>
    </div>
  );
}
