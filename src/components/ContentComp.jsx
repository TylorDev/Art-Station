import { useRef } from "react";
import { FaChevronDown, FaChevronUp} from "react-icons/fa";

export function ContentComp({ show = true, img, titulo="Default Text", contenido = "Nada!",setShow }) {



  return <div className="content"  >
     <div className="titulo">{titulo}</div>
    <img className="image principal" src={img} alt="" />
    	<p  hidden={show}>	
        {contenido}
      </p>



      <button
        style={show?{ position: "absolute"}:{position:"sticky"}}
        className="btn-read"
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        {show ? <><FaChevronDown /> Ver más</> : <> <FaChevronUp /> Ver menos</>}

      </button>
    
  </div>;
}
