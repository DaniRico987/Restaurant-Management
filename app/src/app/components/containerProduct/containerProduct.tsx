import CardProduct from "../cardProduct/cardProduct";
import "./containerProduct.css";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface CardProductProps {
  category: string;
}

const ContainerProduct: React.FC<CardProductProps> = ({ category }) => {
  const products: Product[] = [
    {
      id: "1",
      name: "Sencilla",
      description:
        "Carne de res + lechuga + tomate + cebolla + pepinillos + queso + salsa especial",
      price: 14500,
    },
    {
      id: "2",
      name: "Doble",
      description:
        "2 carne de res + lechuga + tomate + cebolla + pepinillos + queso + salsa especial",
      price: 15000,
    },
    {
      id: "3",
      name: "Triple",
      description:
        "3 carne de res + lechuga + tomate + cebolla + pepinillos + queso + salsa especial",
      price: 20000,
    },
  ];

  return (
    <div className="containerProduct">
      <h2 className="titleContainer">{category}:</h2>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ContainerProduct;
