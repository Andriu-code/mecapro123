import "./Footer.css";
import mecaproLogo from "../../assets/img/MecaproWhiteLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-container">
          <div className="footer-col">
            <img className="footer-logo" src={mecaproLogo} alt="mecaLogo" />
            <h3 className="footer-logo-txt">Soluciones para la industria</h3>
            <p>
              Somos tu aliado estratégico en maquinaria, repuestos
              e insumos industriales para mantener tu operación siempre en movimiento.
            </p>
          </div>
          <div className="footer-col">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>

              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Contacto</h3>
            <ul>
              <li>
                <i className="fas fa-phone"></i> (502) 5921-6197
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>Ciudad de Guatemala,
                Guatemala
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                smimecapro@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 Mecapro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
