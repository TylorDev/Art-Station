import { useEffect, useState, useRef } from "react";

const ColiderComp = ({ imgSrc }) => {
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
    <div ref={containerRef} className="mainConteiner">
      <div
        className="imageConteiner"
        ref={imageRef}
        style={{
          transform: `translate(${localPosition.x - imageRef.current.offsetWidth / 2}px, 
            ${localPosition.y - imageRef.current.offsetHeight / 2}px)`,
        }}
      >
        <img className="imageMov" src={imgSrc}></img>
      </div>
    </div>
  );
};
