import { useState } from 'react';

export const Bar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <>
      <button
        className="navbar-toggler mx-2"
        id='btn-menu'
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a href='#' className='nav-link'>Inicio</a>
          </li>
          <li className='nav-item'>
            <a href='#description' className='nav-link'>Descripcion</a>
          </li>
          <li className='nav-item'>
            <a href='#services' className='nav-link'>Servicios</a>
          </li>
          <li className='nav-item'>
            <a href='#plans' className='nav-link'>Planes</a>
          </li>
          <li className='nav-item'>
            <a href='#contact-us' className='nav-link' id="contact-bar">Contactos</a>
          </li>
        </ul>
      </div>
    </>
  )
}