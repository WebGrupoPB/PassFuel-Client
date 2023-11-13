import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import paidSvg from '../assets/icons/Paid.svg';
import './styles/Navbar.css';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Agregar un efecto para desactivar el menú en pantallas más grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Agregar un event listener para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    // Agregar un event listener para el documento principal
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="#" onClick={scrollToTop}>
          <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/general/Pass-Logo.png" alt="logo-tango" />
        </NavLink >
      </div>

      <div className='showMenu'>
        <button className="hamburger-button" onClick={() => {
          if (menuOpen) {
            closeMenu();
          } else {
            toggleMenu();
          }
        }}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      {menuOpen && (
        <div className='menuMovil'>
          <div className="navbar-links">
            <NavLink
              to={'/'}
              activeClassName="active"
              isActive={(match, location) => {
                return location.hash === '' || location.hash === '#/';
              }}
              onClick={scrollToTopq}
            >
              Inicio
            </NavLink>

            <a href="/#about">
            ¿Quiénes somos?
          </a>


          <a href="/#estaciones">
            Estaciones
          </a>


          {/* <a href="">
            Empleos
          </a> */}
                    

          <a href="/#promocion">
            Promociones
          </a>
            

          <a href="/#servicios">
            Servicios
          </a>

            <a href="https://tango.store/" target='_blank'>
              <span className='storeButton'>Tango Store <img src={paidSvg} alt="canasta-compra" /> </span>
            </a>
          </div>
        </div>
      )}

      <div className='menuDesktop'>
        <div className="navbar-links">
          <NavLink to={'/'} activeClassName="active" onClick={scrollToTop}>  
            Inicio
          </NavLink>

          <a href="/#about">
            ¿Quiénes somos?
          </a>


          <a href="/#estaciones">
            Estaciones
          </a>


          {/* <a href="">
            Empleos
          </a> */}
                    

          <a href="/#promocion">
            Promociones
          </a>
            

          <a href="/#servicios">
            Servicios
          </a>
            
          
        </div>
      </div>

      <div className='menuDesktop'>
        <div className="navbar-links">
          <a href="https://tango.store/" target='_blank'>
            <span className='storeButton'>Tango Store <img src={paidSvg} alt="canasta-compra" /> </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
