"use client";

import { motion, useAnimation } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import DetailsCard from "../detailsCard/detailsCard";
import "./cardProduct.css";
import { CardProductProps } from "../../interfases/cardProduct.interfase";

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCardFlipped, setCardFlipped] = useState(false);
  const controls = useAnimation();

  const handleOpenModal = () => {
    // ...
    controls.start({
      rotateY: 180,
      scale: 1.2,
      opacity: 0,
      transition: { duration: 1 },
    }).then(() => {
      setModalVisible(true);
    });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    controls.start({
      rotateY: 0,
      scale: 1,
      opacity: 1, // Restablece la opacidad a 1 para que sea visible
      transition: { duration: 0.5 },
    }).then(() => {
      setCardFlipped(false);
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
    }).format(price);
  };

  return (
    <>
      <motion.div
        className={`detailsProduct ${isCardFlipped ? 'flipped' : ''}`}
        onClick={handleOpenModal}
        initial={{ scale: 1 }}
        animate={controls}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <img src="/img/hamburgerMain.jpg" alt={product.name}/>
        <h3 className="titleProduct font-Lacquer">
          {product.name.toLowerCase()}
        </h3>
        <p className="price font-LexendExa">${formatPrice(product.price)}</p>
      </motion.div>

      <DetailsCard product={product} isVisible={isModalVisible} onClose={handleCloseModal} />
    </>
  );
};

export default CardProduct;
