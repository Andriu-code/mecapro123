import { useState, useEffect } from "react";
import logoMecapro from "../../assets/img/MecaproWhiteLogo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#inicio">
            <img src={logoMecapro} alt="Mecapro logo" className="navbar-logo-img" />
          </a>
        </div>

        {isMobile ? (
          <>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              ☰
            </button>
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <ul className="nav-links-mobile">
                <li>
                  <a href="#inicio" onClick={toggleMenu}>
                    INICIO
                  </a>
                </li>
                <li>
                  <a href="#nosotros" onClick={toggleMenu}>
                    NOSOTROS
                  </a>
                </li>
                <li>
                  <a href="#productos" onClick={toggleMenu}>
                    PRODUCTOS
                  </a>
                </li>
                <li>
                  <a href="#benefits" onClick={toggleMenu}>
                    SERVICIOS
                  </a>
                </li>
                <li>
                  <a href="#contacto" onClick={toggleMenu}>
                    CONTACTO
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <ul className="nav-links">
            <li>
              <a href="#inicio">INICIO</a>
            </li>
            <li>
              <a href="#nosotros">NOSOTROS</a>
            </li>
            <li>
              <a href="#productos">PRODUCTOS</a>
            </li>
            <li>
              <a href="#benefits">SERVICIOS</a>
            </li>
            <li>
              <a href="#contacto">CONTACTO</a>
            </li>

          </ul>
        )}
      </nav>
    </>
  );
};
