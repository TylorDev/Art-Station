import { ColiderComp } from "./ColiderComp";
import { TabComponent } from "./TabComponent";
import { ContentComp } from "./ContentComp";
import { useState } from "react";
import { CoverComp } from "./CoverComp";

const imagenes = [
  {
    title: "XD! ",
    imageUrl:
      "https://i.pinimg.com/236x/fb/d8/ac/fbd8ac51ab44f1f5871aa728dc99dc93.jpg",
  },
  {
    title: "Playa",
    imageUrl: "https://wallpapercave.com/wp/wp12215865.jpg",
  },
  {
    title: "Fotografía",
    imageUrl:
      "https://i.pinimg.com/236x/bd/90/99/bd909937e87b89078cc75bd5d4c003d9.jpg",
  },
  {
    title: "Rascacielos",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg",
  },
  {
    title: "Retrato",
    imageUrl:
      "https://i.pinimg.com/236x/25/6a/41/256a41ae931bb7a09f5d8504f3474f4b.jpg",
  },
  {
    title: "Paisaje",
    imageUrl:
      "https://i.pinimg.com/236x/fb/d8/ac/fbd8ac51ab44f1f5871aa728dc99dc93.jpg",
  },
  {
    title: "Paisaje",
    imageUrl:
      "https://i.pinimg.com/236x/fb/d8/ac/fbd8ac51ab44f1f5871aa728dc99dc93.jpg",
  },
  {
    title: "Playa",
    imageUrl: "https://wallpapercave.com/wp/wp12215865.jpg",
  },
  {
    title: "Fotografía",
    imageUrl:
      "https://i.pinimg.com/236x/bd/90/99/bd909937e87b89078cc75bd5d4c003d9.jpg",
  },
  {
    title: "Rascacielos",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg",
  },
  {
    title: "Retrato",
    imageUrl:
      "https://i.pinimg.com/236x/25/6a/41/256a41ae931bb7a09f5d8504f3474f4b.jpg",
  },
  {
    title: "Paisaje",
    imageUrl:
      "https://i.pinimg.com/236x/fb/d8/ac/fbd8ac51ab44f1f5871aa728dc99dc93.jpg",
  },
];

export const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="container-flex">
        {imagenes.map((imagen, index) => (
          <TabComponent
            img={imagen.imageUrl}
            titulo={imagen.title}
          ></TabComponent>
        ))}
      </div>
          <CoverComp></CoverComp>
    </div>
  );
};
