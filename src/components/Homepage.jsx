import { useEffect, useState, useRef } from "react";

export const Homepage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <ImageContainer imgSrc="https://i.pinimg.com/564x/2a/24/f1/2a24f1075ea35807be8835ebae917ac1.jpg"></ImageContainer>
      <ImageContainer imgSrc="https://i.pinimg.com/564x/60/90/74/609074450a366e336d732d54efc26827.jpg"></ImageContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <ImageContainer  imgSrc="https://i.pinimg.com/236x/ba/db/73/badb73ac57cc285ea3a38c3207eee8a3.jpg"></ImageContainer>
      <ImageContainer  imgSrc="https://i.pinimg.com/236x/49/0c/06/490c06a24aced8770531c3ba885717d2.jpg"></ImageContainer>
      <ImageContainer  imgSrc="https://i.pinimg.com/236x/f4/48/83/f448832c7979826844deae6d8a266284.jpg"></ImageContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <ImageContainer  imgSrc="https://i.pinimg.com/236x/29/6b/0d/296b0de158fb5a8bf7e69287dcc90e7a.jpg"></ImageContainer>
      <ImageContainer  imgSrc="https://i.pinimg.com/564x/e0/11/a6/e011a69638c1e099db8846e513b8b24a.jpg"></ImageContainer>

      </div>
    </div>
  );
};

const ImageContainer = ({imgSrc}) => {

  const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(1);
  
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


  return (
    <div ref={containerRef} className="mainConteiner" >
      <div 
        className="imageConteiner"
          ref={imageRef}
          style={{  
            transform: `translate(${
              localPosition.x - imageRef.current.offsetWidth / 2}px, 
            ${localPosition.y - imageRef.current.offsetHeight / 2}px)`,
           
          }}
        >
          <img className="imageMov"
            src={imgSrc}
          ></img>
        </div>
    </div>
  );
};
