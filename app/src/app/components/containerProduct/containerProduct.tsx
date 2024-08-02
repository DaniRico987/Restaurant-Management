import CardProduct from "../cardProduct/cardProduct";
import "./containerProduct.css";

interface Product {
  id: string;
  name: string;
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
      price: 14500,
    },
    {
      id: "2",
      name: "Doble",
      price: 15000,
    },
    {
      id: "3",
      name: "Triple",
      price: 20000,
    },
    {
      id: "4",
      name: "Sencilla",
      price: 14500,
    },
    {
      id: "5",
      name: "Doble",
      price: 15000,
    },
    {
      id: "6",
      name: "Triple",
      price: 20000,
    },
  ];

  return (
    <div className="containerProduct">  
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ContainerProduct;
