import React from 'react'
import './footer.css'
import Image from 'next/image'


const footer = () => {
  return (
    <footer className="p-2 text-white bg-[#FAA307]">
      <div className="flex items-center flex-col">
        <div className="flex text-center items-center justify-around border-b-white border-b-2 content-legal-info">
          <div><a href="#" className='footer-text'>Politica de privacidad</a></div>
          <div><a href="#" className='footer-text'>Terminos y condiciones</a></div>
          <div><a href="#" className='footer-text'>Informacion relevante</a></div>
          <div><a href="#" className='footer-text'>accesibilidad</a></div>
        </div>
        <div className='flex justify-between content-legal-info'>
          <div className="block items-center p-2 text-left text-sm">
            <p>Carrera 28 #17-43</p>
            <p>Pereira, Risaralda, Colombia</p>
          </div>
          <div className="flex my-auto">
            <ul className="flex w-auto h-auto">
              <li>
                <a href="https://www.facebook.com/" target="_blank"
                ><Image
                    src='/facebook.svg'
                    alt="facebook"
                    width={30}
                    height={30}
                  /></a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en" target="_blank"
                ><Image
                    src='/twitter.svg'
                    alt="facebook"
                    width={30}
                    height={30}
                  /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank"
                ><Image
                    src='/instagram.svg'
                    alt="facebook"
                    width={30}
                    height={30}
                  /></a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mb-1 text-sm">Copyright © 2024 Restaurante</p>
      </div>
    </footer>
  )
}

export default footer