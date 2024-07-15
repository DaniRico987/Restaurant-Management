import ContainerProduct from "./components/containerProduct/containerProduct";

export default function HomePage() {
  return (
    <div className="p-5 flex flex-col flex-wrap justify-center align-middle gap-5">
      <ContainerProduct category="Hamburguesas" />
      <ContainerProduct category="Perros" />
    </div>
  );
}
