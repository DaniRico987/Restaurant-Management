"use client";
// components/navBar/navBar.js
import Link from "next/link";
import { useState } from "react"; // Importa useState si aún no está importado

const Navbar = () => {
  // Ejemplo de estado para los números de mesa y pedido
  const [mesa, setMesa] = useState(3); // Valor inicial de mesa
  const [pedido, setPedido] = useState(0); // Valor inicial de pedido
  const [contadorCesta, setContadorCesta] = useState(99);

  return (
    <nav className="bg-[#FAA307] p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] h-[80px]">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/img/hamburgerIcon.png"
            alt="Hamburger Icon"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div className="text-white flex ml-auto mr-4">Mesa: {mesa}</div>
      <div className="text-white mr-8">Pedido: {pedido}</div>
      <div className="flex items-center">
        <Link href="/pages/shopping">
          <img
            src="/img/basketIcon.png"
            alt="Basket Icon"
            width={40}
            height={40}
          />
          <span
            className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center"
            style={{
              position: "absolute",
              top: "45px", // Ajusta según sea necesario
              right: "10px", // Ajusta según sea necesario
              zIndex: 10,
            }}
          >
            {contadorCesta}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
