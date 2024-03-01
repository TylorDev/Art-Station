


export function CoverComp({darkTheme}) {
  return <div className="coverContainer">
    <img className="Cover" src={`./src/assets/${darkTheme?"example2.png":"example.png"}`} alt="" />
    <div>{darkTheme}</div>
    <div className="Name"> 四宮しのみや かぐや </div>
    
  </div>;
}
