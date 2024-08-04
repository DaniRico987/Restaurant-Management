"use client";

import { FC, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import './detailsCard.css';
import SwitchGroup from './addingSwitch/addingSwitch';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface DetailsCardProps {
  product: Product;
  isVisible: boolean;
  onClose: () => void;
}

const DetailsCard: FC<DetailsCardProps> = ({ product, isVisible, onClose }) => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const controls = useAnimation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll');
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.05, // Reduce el delay a 0.25 segundos
          duration: 0.5, // Ajusta la duración si es necesario
        },
      }).then(() => {
        setShowOverlay(true);
      });
    } else {
      document.body.classList.remove('no-scroll');
      controls.start({
        opacity: 0,
        scale: 1,
        rotateY: 0, // Asegúrate de que la rotación sea 0 al cerrar
        transition: { duration: 0.5 },
      });
      setShowOverlay(false);
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVisible, controls]);

  if (!isVisible) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
    }).format(price);
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  const handleInfoClick = () => {
    setInfoVisible(true);
  };

  const handleHideInfo = () => {
    setInfoVisible(false);
  };

  const switchItems = [
    { id: 'switch1', label: 'Option 1' },
    { id: 'switch2', label: 'Option 2' },
    { id: 'switch3', label: 'Option 3' },
  ];

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {showOverlay && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <div className="relative p-6 rounded-3xl shadow-lg mx-4 md:mx-6 detailsCard border-2">
        <div className='mb-4 flex justify-between border-b-2 border-white pb-2'>
          <h2 className="text-2xl mx-1 text-white flex items-center justify-center font-Lacquer">{product.name.toLowerCase()}</h2>
          <button className="mx-3 text-2xl mb-3" onClick={handleCloseClick}>
            <Image 
              src="/close.svg"
              alt="Close"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="relative flex justify-center items-center infoBox ">
          <Image
            src="/img/hamburger.jpg"
            alt='Hamburger'
            className='rounded-2xl'
            width={300}
            height={200}
            priority={true}
          />
          {isInfoVisible && (
            <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-2xl font-LYLAS'>
              <p className='Info text-white p-4 rounded-lg'>
              Aqui va la descripcion del producto
              </p>
            </div>
          )}
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
        <div className='flex items-center justify-center'>
          <p className=" text-2xl mt-2 mb-2 p-4 rounded-tl-xl rounded-bl-xl priceContainer buyElement text-center font-LexendExa">${formatPrice(product.price)}</p>
          <button className="text-2xl mt-2 mb-2 p-2 rounded-tr-xl rounded-br-xl addContainer buyElement flex items-center justify-center" onClick={handleCloseClick}>
            <Image
            src="/shoppingCar.svg"
            alt='add'
            width={40}
            height={40}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsCard;
