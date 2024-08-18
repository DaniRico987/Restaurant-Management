"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { GlobalContextProps } from "../interfaces/globalContext.interface";
import { Product } from "../interfaces/containerProducts.inteface";

const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

const endPoint = "https://localhost:3000";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState<string>("1");
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <GlobalContext.Provider
      value={{ categoryId, setCategoryId, products, setProducts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
