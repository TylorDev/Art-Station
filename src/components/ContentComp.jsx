import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function ContentComp({ show = true, img, titulo="Default Text", setShow }) {
  return <div className="content">
     <div className="titulo">{titulo}</div>
    <img className="image principal" src={img} alt="" />
    	<p  hidden={show}>	
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque placeat ut officiis molestiae dolore iusto vel deserunt perspiciatis, minima tempore, voluptates error, assumenda fugiat fugit consectetur! Natus, ut quis.
        position: sticky;
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio illo amet omnis, voluptates ipsam, iusto maxime incidunt magnam animi natus accusamus tempora doloribus assumenda voluptas. Ducimus esse velit dolorem!
      </p>

      <button
        style={{position: show? "absolute": "sticky"}}
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
