"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencil,
  faX,
  faFloppyDisk,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import SwitchGroup from "../../components/detailsCard/addingSwitch/addingSwitch";

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
  onEdit,
}: {
  product: Product;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
  return (
    <div className="flex justify-between items-center p-4 pr-20 bg-[#03071e] rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,1)] text-[#faa307] relative">
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
      <div className="absolute bottom-4 right-4 flex gap-3">
        <FontAwesomeIcon
          title="Ver adicionales"
          icon={faPencil}
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-[#FFBA08]"
          onClick={() => onEdit(product.id)}
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

export default function ShoppingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  useEffect(() => {
    const productsFromApi = fetchProducts();
    setProducts(productsFromApi);
  }, []);

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditingProductId(id);
  };

  const handleClose = () => {
    setEditingProductId(null);
  };

  const handleSaveChanges = () => {
    // Aquí puedes agregar la lógica para guardar los cambios realizados
    setEditingProductId(null);
  };

  const handleConfirmPurchase = () => {
    // Aquí puedes agregar la lógica para confirmar la compra
    alert("Compra confirmada!");
  };

  const switchItems = [
    { id: "switch1", label: "Option 1" },
    { id: "switch2", label: "Option 2" },
    { id: "switch3", label: "Option 3" },
  ];

  return (
    <div className="flex flex-col items-center p-5 pt-24 font-LYLAS">
      <div className="w-full p-5">
        {products.length > 0 && (
          <h2 className="mb-4 text-center text-2xl font-bold text-[#faa307]">
            Orden de Compras
          </h2>
        )}
        <div className="flex flex-col gap-5 mb-8">
          {products.length > 0 ? (
            <>
              {products.map((product) => (
                <div key={product.id}>
                  <ProductRow
                    product={product}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </div>
              ))}
            </>
          ) : (
            <p className="text-[#faa307]">No se han agregado productos aún.</p>
          )}
        </div>
        {products.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={handleConfirmPurchase}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#faa307] rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,1)] cursor-pointer hover:opacity-80"
            >
              Confirmar compra
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 text-[#03071e]"
              />
            </button>
          </div>
        )}
      </div>

      {editingProductId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex flex-col w-96 p-6 bg-[#03071e] rounded-2xl shadow-lg">
            <FontAwesomeIcon
              icon={faX}
              title="Cerrar"
              className="absolute top-4 right-4 w-6 h-6 cursor-pointer hover:opacity-80 text-white"
              onClick={handleClose}
            />
            <div className="mb-4">
              <h3 className="mb-4 text-xl font-bold text-white">
                Editar Producto
              </h3>
              <SwitchGroup items={switchItems} />
            </div>
            <button
              title="Guardar Cambios"
              onClick={handleSaveChanges}
              className="self-center flex items-center gap-2 px-4 py-2 bg-[#faa307] rounded-lg cursor-pointer hover:opacity-80"
            >
              Guardar cambios
              <FontAwesomeIcon
                icon={faFloppyDisk}
                className="w-5 h-5 text-white"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
