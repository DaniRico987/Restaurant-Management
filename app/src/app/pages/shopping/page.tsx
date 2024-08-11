"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
// Definimos un tipo para los productos
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function ProductRow({
  product,
  onDelete,
}: {
  product: Product;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="flex justify-between items-center p-4 pr-20  bg-[#03071e] rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,1)] text-[#faa307] relative">
      <div className="flex items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-2xl mr-4"
        />
        <div>
          <h3 className="text-white text-lg font-semibold">{product.name}</h3>
          <p className="text-[#faa307] text-sm">{product.description}</p>
          <p className="text-white text-sm">Precio: ${product.price}</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 gap-3 flex">
        <FontAwesomeIcon
          title="Ver adicionales"
          icon={faPencil}
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-[#FFBA08]"
        />
        <FontAwesomeIcon
          icon={faTrash}
          title="Eliminar"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-[#d00000]"
          onClick={() => onDelete(product.id)}
        />
      </div>
    </div>
  );
}

// Simular un endpoint que devuelve productos
const fetchProducts = (): Product[] => {
  return [
    {
      id: 1,
      name: "Hamburguesa sencilla",
      description:
        "Pan artesanal + carne de res + queso lonchas + vegetales + salsa + ripio",
      price: 10,
      image: "/img/hamburgerMain.jpg",
    },
    {
      id: 2,
      name: "Hamburguesa doble",
      description:
        "Pan artesanal + carne de res + queso lonchas + vegetales + salsa + ripio",
      price: 20,
      image: "/img/hamburgerMain.jpg",
    },
    {
      id: 3,
      name: "Hamburguesa de pollo",
      description:
        "Pan artesanal + carne de res + queso lonchas + vegetales + salsa + ripio",
      price: 30,
      image: "/img/hamburgerMain.jpg",
    },
    {
      id: 4,
      name: "Hamburguesa suprema",
      description:
        "Pan artesanal + carne de res + queso lonchas + vegetales + salsa + ripio",
      price: 50,
      image: "/img/hamburgerMain.jpg",
    },
  ];
};

// Componente principal de la página de compras
export default function ShoppingPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simular llamada al endpoint
    const productsFromApi = fetchProducts();
    setProducts(productsFromApi);
  }, []);

  // Función para eliminar un producto por id
  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-5 pt-24 flex flex-col items-center font-LYLAS">
      <div className="p-5 w-full ">
        {products.length > 0 && (
          <h2 className="text-2xl font-bold text-[#faa307] mb-4 text-center">
            Orden de Compras
          </h2>
        )}
        <div className="gap-5 flex flex-col">
          {products.length > 0 ? (
            <>
              {products.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  onDelete={handleDelete}
                />
              ))}
            </>
          ) : (
            <p className="text-[#faa307]">No se han agregado productos aún.</p>
          )}
        </div>
      </div>
    </div>
  );
}
