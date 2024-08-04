"use client";

import "./cardProduct.css";
import Image from "next/image";
import { useState } from "react";
import DetailsCard from "../detailsCard/detailsCard";


interface Product {
  id: string;
  name: string;
  price: number;
}

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
    }).format(price);
  };

  const handleOpenModal = () => {
    console.log("Opening modal");
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    console.log("Closing modal");
    setModalVisible(false);
  };


  return (
    <div className="detailsProduct" onClick={handleOpenModal}>
      <Image src="/img/hamburgerMain.jpg" alt={product.name} width={200} height={200} priority={true} style={{width: "200",height: "auto"}}/>
      <h3 className="titleProduct font-Lacquer">
        {product.name.toLowerCase()}
      </h3>
      <p className="price font-LexendExa">${formatPrice(product.price)}</p>
      <DetailsCard product={product} isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default CardProduct;
