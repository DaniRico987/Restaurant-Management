"use client";

import React, { useEffect, useState, useContext } from "react";
import "./carruselCategories.css";
import { Category } from "@/app/interfaces/category.interface";
import { getCategories } from "./services/carruselCategories.service";
import { GlobalContext } from "@/app/services/GlobalContext";

const CarruselCategories: React.FC = () => {
  const { categoryId, setCategoryId } = useContext(GlobalContext);
  const { categories, setCategories } = useContext(GlobalContext);

  useEffect(() => {
    const loadCategories = async () => {
      if (categories.length > 0) {
        return;
      }
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error(err);
        setCategories([]);
      }
    };

    loadCategories();
  }, []);

  const firstCharToUpper = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="categorieContainer">
      {categories.map((category) => (
        <div
          className={`categorieCard ${
            category.categoryId === categoryId ? "selected" : ""
          }`}
          key={category.categoryId}
          onClick={() => setCategoryId(category.categoryId)}
        >
          <h3 className="categorieTitle font-LYLAS">
            {firstCharToUpper(category.categoryName)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CarruselCategories;
