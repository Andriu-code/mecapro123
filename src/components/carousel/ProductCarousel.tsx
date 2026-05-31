import { useEffect, useState } from "react";
import "./ProductCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import componentes from "../../assets/img/carrousel/componentesI.png"
import equipos from "../../assets/img/carrousel/equiposIndustriales.png"
import maquinaria from "../../assets/img/carrousel/maquinariaPesada.png"
import piezaMetalica from "../../assets/img/carrousel/piezaMetalica.png"



interface Product {
  image: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    image: piezaMetalica,
    title: "DISEÑO Y FABRICACIÓN DE PIEZAS METÁLICAS",
    description: " \n \n ",
  },
  {
    image: componentes,
    title: "COMPONENTES PARA LA INDUSTRIA",
    description: " \n \n \n ",
  },
  {
    image: equipos,
    title: "EQUIPOS INDUSTRIALES - IMPORTADORES DIRECTOS",
    description: " \n \n ",
  },
  {
    image: maquinaria,
    title: "MANTENIMIENTO PREVENTIVO Y CORRECTIVO",
    description: "• Maquinaria pesada\n• Transporte pesado",
  },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex >= products.length - cardsPerView) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(products.length - cardsPerView);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="products-section">
      <div className="products-top">
        <div>
          <h2>NUESTROS PRODUCTOS</h2>
          <span className="section-line"></span>
        </div>


      </div>

      <div className="slider-wrapper">
        <button
          type="button"
          aria-label="Slide anterior"
          title="Slide anterior" className="arrow left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="slider-container">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)
                }%)`,
            }}
          >
            {products.map((product, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="card-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Siguiente slide"
          title="Siguiente slide"
          className="arrow right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}