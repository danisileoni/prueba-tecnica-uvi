import logoNav from '../assets/imgs/logo-nav.png';

export const Footer = () => {
  return (
    <footer id="foot">
      <div className="group-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src={logoNav} alt="logo uv!" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>INFORMACIÓN DE CONTACTO</h2>
          <p>info@uvi.com.ar</p>
          <a href="https://www.linkedin.com/company/universo-i/" target="_blank">LinkedIn</a>
        </div>
        <div className="box">
          <h2>CREDITOS PARA EL DISEÑADOR</h2>
          <p>Daniele Armando Sileoni</p>
          <a href="https://www.linkedin.com/in/danielesileoni/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div className='group-2'>
        <small>&copy; 2023 <b>Uvi</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  )
}