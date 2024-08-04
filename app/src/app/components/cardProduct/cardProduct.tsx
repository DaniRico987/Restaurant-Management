
import "./cardProduct.css";


interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {


  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
    }).format(price);
  };


  return (
    <div className="cursor-pointer" onClick={handleOpenModal}>
      <h3 className="titleProduct">{product.name}</h3>
      <div className="detailsProduct flex justify-center align-middle gap-2">
        <p className="description">{product.description}</p>
        <p className="price">${formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default CardProduct;
