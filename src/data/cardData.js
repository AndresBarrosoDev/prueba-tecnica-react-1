import * as assets from "../assets";

const cardData = [
  {
    id: 1,
    banner: assets.banner1,
    logo: assets.logo1,
    title: "SuperAutos",
    ubicación: "Nivel 1",
    horario: {
      dia: "lunes",
      inicio: "10:00",
      fin: "17:00",
    },
    labelLink: "Más información",
    link: "https://www.google.com",
  },
  {
    id: 2,
    banner: assets.banner2,
    logo: assets.logo2,
    title: "Donut´s",
    ubicación: "Nivel feria",
    horario: {
      dia: "martes",
      inicio: "11:00",
      fin: "18:00",
    },
    labelLink: "Ver más",
    link: "https://www.google.com",
  },
  {
    id: 3,
    banner: assets.banner3,
    logo: assets.logo3,
    title: "Bebidas gaseosas3",
    ubicación: "Patio de comidas",
    horario: {
      dia: "miércoles",
      inicio: "12:00",
      fin: "19:00",
    },
    labelLink: "Más información",
    link: "https://www.google.com",
  },
];

export default cardData;
