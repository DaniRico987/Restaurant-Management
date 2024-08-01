"use client";
// components/navBar/navBar.js
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mesa, setMesa] = useState(3);
  const [pedido, setPedido] = useState(0);
  const [contadorCesta, setContadorCesta] = useState(99);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-[1000] h-[80px] transition-colors duration-300 ${
        scrolled ? "bg-[#FAA307]" : "bg-black bg-opacity-30"
      }`}
    >
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
              top: "45px",
              right: "10px",
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
