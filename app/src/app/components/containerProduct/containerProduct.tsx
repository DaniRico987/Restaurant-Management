"use client";

import CardProduct from "../cardProduct/cardProduct";
import "./containerProduct.css";
import { CardProductProps } from "../../interfaces/containerProducts.inteface";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/app/services/GlobalContext";
import { getProducts } from "./services/containerProduct.service";

const ContainerProduct: React.FC<CardProductProps> = () => {
  const { products, setProducts } = useContext(GlobalContext);

  useEffect(() => {
    const loadProducts = async () => {
      if (products.length > 0) {
        return;
      }
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error(err);
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="containerProduct">
      {products.map((product) => (
        <CardProduct key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ContainerProduct;
