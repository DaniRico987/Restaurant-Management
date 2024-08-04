"use client";

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import './detailsCard.css';
import SwitchGroup from './addingSwitch/addingSwitch';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface DetailsCardProps {
  product: Product;
  isVisible: boolean;
  onClose: () => void;
}

const DetailsCard: FC<DetailsCardProps> = ({ product, isVisible, onClose }) => {
  const [isInfoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
    }).format(price);
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evita que el clic se propague al contenedor del producto
    onClose();
  };

  const handleInfoClick = () => {
    setInfoVisible(true); // Muestra la información
  };

  const handleHideInfo = () => {
    setInfoVisible(false); // Oculta la información
  };

  const switchItems = [
    { id: 'switch1', label: 'Option 1' },
    { id: 'switch2', label: 'Option 2' },
    { id: 'switch3', label: 'Option 3' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-24"> {/* Ajuste aquí */}
      <div className="relative p-6 rounded-3xl shadow-lg mx-4 md:mx-6 detailsCard border-2">
        {/* Título y botón de cierre de la tarjeta de detalles */}
        <div className='mb-4 flex justify-between border-b-2 border-white pb-2'>
          <h2 className="text-xl mx-1 text-white">{product.name}</h2>
          <button className="mx-2 text-2xl mb-2" onClick={handleCloseClick}>
            <Image 
              src="/close.svg"
              alt="Close"
              width={30}
              height={30}
            />
          </button>
        </div>

        {/* Imagen de fondo */}
        <div className="relative flex justify-center items-center infoBox ">
          <Image
            src="/img/hamburger.jpg"
            alt='Hamburger'
            objectFit='cover'
            className='rounded-2xl'
            width={250}
            height={300}
          />
          {/* Texto informativo */}
          {isInfoVisible && (
            <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-2xl'>
              <p className='Info text-white p-4 rounded-lg'>
                {product.description}
              </p>
            </div>
          )}
          {/* Ícono de información */}
          {!isInfoVisible && (
            <Image
              src="/info.svg"
              alt='Info'
              width={24}
              height={24}
              className='absolute top-2 left-2 cursor-pointer'
              onClick={handleInfoClick}
            />
          )}
          {/* Botón de cierre del texto informativo */}
          {isInfoVisible && (
            <button
              className="absolute top-2 left-2"
              onClick={handleHideInfo}
            >
              <Image
                src="/close.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
          )}
        </div>
        <SwitchGroup items={switchItems} />
        {/* Precio del producto */}
        <div className='flex items-center justify-center'>
          <p className=" text-2xl mt-2 mb-2 p-4 rounded-tl-xl rounded-bl-xl priceContainer buyElement text-center">${formatPrice(product.price)}</p>
          <button className="text-2xl mt-2 mb-2 p-2 rounded-tr-xl rounded-br-xl addContainer buyElement flex items-center justify-center" onClick={handleCloseClick}>
            <Image
            src="/shoppingCar.svg"
            alt='add'
            width={30}
            height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
