import React, { useState, useEffect } from 'react';
import "./styles/Decoradores.css"




import instagramPng from '../assets/icons/instagram.png'
import facebookPng from '../assets/icons/facebook.png'
import whatsappPng from '../assets/icons/whatsappIcon.png'


const ChatBubble = () => {
  return (
    <div className='bubbleChat'>
      <div className='squareBubble'>
          <h4>¡Hola!</h4>
          <p>en que puedo ayudarte</p>
      </div>

      <div className='trianguleBubble'></div>
    </div>
  )
}



const Decoradores = () => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      setShowChat((prevShowChat) => !prevShowChat);
    }, 10000); // Cambiar el estado cada 10 segundos

    return () => {
      clearInterval(chatInterval);
    };
  }, []);


  const [isHovered, setIsHovered] = useState(false);

  // Función para manejar el hover
  const handleHover = () => {
    setIsHovered(true);
  };

  // Función para manejar el fin del hover
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div>      
        <div className='social-media'>
          <a href="https://www.instagram.com/tangostore.la/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"><div className='circle-icon'><img src={instagramPng} alt="instagram"/></div></a>
          <a href="https://m.facebook.com/GasolinaPass" target="_blank"><div className='circle-icon'><img src={facebookPng} alt="facebook"/></div></a>
          <a href="https://wa.link/riubo8" target="_blank">
            <div
              className={`circle-icon${isHovered ? ' hovered' : ''}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img src={whatsappPng} alt="whatsapp" className='whatsappIcon' />
          </div> 
          </a>
          {isHovered && <ChatBubble />}
        </div>
    </div>
  );
};

export default Decoradores;