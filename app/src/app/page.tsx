import ContainerProduct from "./components/containerProduct/containerProduct";

export default function HomePage() {
  return (
    <div className="p-5 pt-24 flex flex-col flex-wrap justify-center align-middle gap-5">
      <img src="/img/hamburgerMain.jpg" alt="Hamburger Icon" />
      <ContainerProduct category="Hamburguesas" />
      <ContainerProduct category="Perros" />
    </div>
  );
}
