import { useEffect, useState } from "react";
import "./ProductCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Product {
  image: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
    title: "MAQUINARIA",
    description: "Equipos industriales para todo tipo de operación.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092918484-8313b44c3d8b?q=80&w=1200&auto=format&fit=crop",
    title: "REPUESTOS",
    description: "Repuestos originales y alternativos de alta calidad.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    title: "INSUMOS",
    description: "Insumos y consumibles para mantenimiento industrial.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200&auto=format&fit=crop",
    title: "ACCESORIOS",
    description: "Accesorios y componentes para maquinaria.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    title: "HERRAMIENTAS",
    description: "Herramientas industriales de alto rendimiento.",
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
