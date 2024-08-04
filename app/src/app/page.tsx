import CarruselCategories from "./components/carruselCategories/carruselCategories";
import ContainerProduct from "./components/containerProduct/containerProduct";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="p-5 pt-24 flex flex-col flex-wrap justify-center align-middle gap-5">
      <div className="relative">
        <img src="/img/hamburgerMain.jpg" alt="Hamburger Icon"/>
        <p className="absolute bottom-0 w-full text-center text-white p-2 text-2xl">
          ¡Hey, qué pasa! Pide tu comida rápida favorita y a disfrutar.
        </p>
      </div>

      <CarruselCategories />
      <ContainerProduct category="Hamburguesas" />
    </div>
  );
}
