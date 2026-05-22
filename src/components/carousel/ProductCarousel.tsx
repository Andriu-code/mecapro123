import { useEffect, useState } from "react";
import "./ProductCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import maquina1 from "../../assets/img/carrousel/maquina1.jpg"
import maquina2 from "../../assets/img/carrousel/maquina2.jpg"
import maquina3 from "../../assets/img/carrousel/maquinaria3.jpg"
import maquina4 from "../../assets/img/carrousel/maquina4.jpg"
import cuartoMaq from "../../assets/img/carrousel/cuartoMaq.jpg"
import insumos1 from "../../assets/img/carrousel/insumos.jpg"
import insumos2 from "../../assets/img/carrousel/insumos2.png"
import engranaje from "../../assets/img/carrousel/engranaje.jpg"
import lineaProd from "../../assets/img/carrousel/lineaProd.jpg"


interface Product {
  image: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    image: maquina4,
    title: "MAQUINARIA",
    description: "Equipos industriales para todo tipo de operación.",
  },
  {
    image: engranaje,
    title: "REPUESTOS",
    description: "Repuestos originales y alternativos de alta calidad.",
  },
  {
    image: insumos1,
    title: "INSUMOS",
    description: "Insumos y consumibles para mantenimiento industrial.",
  },
  {
    image: maquina2,
    title: "VENTAS",
    description: "Ventas al por mayor y menor de todo tipo de herramientas.",
  },
  {
    image: insumos2,
    title: "ACCESORIOS",
    description: "Accesorios y componentes para maquinaria.",
  },
  {
    image: maquina3,
    title: "HERRAMIENTAS",
    description: "Herramientas industriales de alto rendimiento.",
  },
  {
    image: maquina1,
    title: "IMPORTACIONES",
    description: "Importación de cualquier tipo de máquina industrial.",
  },
  {
    image: cuartoMaq,
    title: "EQUIPO MECÁNICO",
    description: "Venta de equipo mecánico, eléctrico y electrónico.",
  },
  {
    image: lineaProd,
    title: "PIEZAS Y MATERIA PRIMA",
    description: "Negociación de piezas, partes y materias primas para producción.",
  }
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