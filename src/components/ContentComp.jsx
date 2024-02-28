
export function ContentComp({ show, img, titulo="Default Text" }) {
  return <div className="content">
     <div className="titulo">{titulo}</div>
    <img className="image principal" src={img} alt="" />
    <p  hidden={show}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
      ipsam velit sint pariatur quidem doloremque, iste icum ducimus
      laboriosam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
      ipsam velit sint pariatur quidem doloremque, iste icum ducimus
      laboriosam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
      ipsam velit sint pariatur quidem doloremque, iste icum ducimus
      laboriosam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
      ipsam velit sint pariatur quidem doloremque, iste icum ducimus
      laboriosam.
    </p>

    
    
  </div>;
}
