"use client";

import { useContext, useState } from "react";
import DetailsCard from "../detailsCard/detailsCard";
import "./cardProduct.css";
import { CardProductProps } from "@/app/interfaces/cardProduct.interface";
import { GlobalContext } from "@/app/services/GlobalContext";

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { categoryId } = useContext(GlobalContext);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
    }).format(price);
  };

  return (
    <>
      <div
        className={`${
          product.categoryId != categoryId
            ? "none"
            : "detailsProduct p-1 text-center flex flex-wrap flex-col rounded-xl"
        }`}
        onClick={handleOpenModal}
      >
        <img src="/img/hamburgerMain.jpg" alt={product.productName} />
        <h3 className="titleProduct pr-1 pl-1 flex justify-center text-center font-Lacquer">
          {product.productName.toLowerCase()}
        </h3>
        <p className="price font-LexendExa flex justify-center text-center pr-1 pl-1">
          ${formatPrice(product.productPrice)}
        </p>
      </div>

      <DetailsCard
        product={product}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CardProduct;
