import "./cardProduct.css";

interface Product {
  id: string;
  name: string;
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
    <div className="detailsProduct">
      <img src="/img/hamburgerMain.jpg" alt={product.name} />
      <h3 className="titleProduct font-Lacquer">
        {product.name.toLowerCase()}
      </h3>
      <p className="price font-LexendExa">${formatPrice(product.price)}</p>
    </div>
  );
};

export default CardProduct;
