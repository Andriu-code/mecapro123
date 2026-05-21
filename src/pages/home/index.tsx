import ProductCarousel from "../../components/carousel/ProductCarousel";

import Banner from "../../components/Banner";
import Beneficios from "../../components/beneficios/Beneficios";
import QuoteBanner from "../../components/QuoteBanner/QuoteBanner";

// Importa las imágenes locales
// import carouselImg1 from "../../assets/img/carousel/carousel_img_clean.jpg";
// import carouselImg2 from "../../assets/img/carousel/carousel_img_clean_1.jpg";
// import carouselImg3 from "../../assets/img/carousel/limpiadores.jpeg";
// import carouselImg4 from "../../assets/img/carousel/carousel_img_tools.jpg";
// import carouselImg5 from "../../assets/img/carousel/maquinas.jpeg";
// import carouselImg6 from "../../assets/img/carousel/rotoplast.jpeg";
// import carouselImg7 from "../../assets/img/carousel/cafeteria.jpeg";
// import carouselImg8 from "../../assets/img/carousel/mangas.jpeg";
// import carouselImg9 from "../../assets/img/carousel/carousel_img_supplies_2.jpg";
// import carouselImg10 from "../../assets/img/carousel/carousel_img_services.jpg";
// import carouselImg11 from "../../assets/img/carousel/carousel_img_services_1.png";
// import carouselImg12 from "../../assets/img/carousel/carousel_img_services_2.jpg";

const Home = () => {
  // const products = [
  //   {
  //     imageUrl: carouselImg1, // Usa la importación local
  //     altText: "Estante productos de limpieza",
  //     description:
  //       "Ofrecemos gran variedad de productos para limpieza del hogar y oficinas, afianzados a las mejores marcas del mercado.",
  //   },
  //   {
  //     imageUrl: carouselImg2,
  //     altText: "Papel para limpieza",
  //     description:
  //       "Accesorios para uso sanitario como:\ndispensadores de papel para manos, papel higiénico, jabón de manos, shampo entre otros.",
  //   },
  //   {
  //     imageUrl: carouselImg3,
  //     altText: "Productos de limpieza",
  //     description:
  //       "Todo lo que necesitas en artículos para limpieza de tipo industrial, para mantener tus espacios limpios y seguros, que te ayudaran a cubrir estándares de seguridad física e industrial.",
  //   },
  //   {
  //     imageUrl: carouselImg4,
  //     altText: "Abastecimiento ferretero",
  //     description:
  //       "Abastecimiento de productos ferreteros con las mejores marcas, tornillería, mangueras, artículos de plomería, carpintería, electricidad, etc.",
  //   },
  //   {
  //     imageUrl: carouselImg5,
  //     altText: "Kits ferreteros",
  //     description:
  //       "Diferentes tipos de herramientas y equipos diseñados para la industria.\nControles remotos industriales\nBombas: sumergibles, succión, centrífugas\nFlujómetros de varios diámetros\nFabricación de piezas mayores a 3”.",
  //   },
  //   {
  //     imageUrl: carouselImg6,
  //     altText: "Productos químicos industriales",
  //     description:
  //       "Suministro de tanques Rotoplast para uso doméstico e industrial de diferentes capacidades según la necesidad de nuestros clientes.",
  //   },
  //   {
  //     imageUrl: carouselImg7,
  //     altText: "Insumos para restaurantes",
  //     description:
  //       "Variedad de artículos para el abastecimiento de cafeterías en oficina e industrias.",
  //   },
  //   {
  //     imageUrl: carouselImg8,
  //     altText: "Insumos para restaurantes",
  //     description:
  //       "Fabricación de equipos para la industria:\nMangas de hule ámbar.\nMangas de lona fortoflex.\nGabachas personalizadas para uso industrial.\n",
  //   },
  //   {
  //     imageUrl: carouselImg9,
  //     altText: "Insumos para restaurantes",
  //     description:
  //       "Insumos de alta gama, cotize sus necesidades y obtenga precios competitivos.",
  //   },
  //   {
  //     imageUrl: carouselImg10,
  //     altText: "Servicios",
  //     description:
  //       "Además contamos con servicios profesionales de:\nFabricación de muebles en melamina.\nServicio de tapicería.\nFabricación de fundas para uso industrial.\n",
  //   },
  //   {
  //     imageUrl: carouselImg11,
  //     altText: "Servicios",
  //     description:
  //       "Devolvemos la vida a sus muebles dañados con técnicas profesionales de restauración.",
  //   },
  //   {
  //     imageUrl: carouselImg12,
  //     altText: "Entregas programadas",
  //     description:
  //       "Garantizamos entregas seguras y puntuales de sus suministros, con procesos eficientes para que todo llegue en perfecto estado y listo para usar.",
  //   },
  // ];

  return (
    <>
      {/* Sección de Banner */}
      <section id="inicio">
        <Banner />
      </section>

      {/* Sección de Beneficios */}
      <section id="beneficios">
        <Beneficios />
      </section>

      {/* Sección de Productos */}
      <section id="productos">
        <ProductCarousel />
      </section>

      {/* Sección de QuoteBanner */}
      <section id="quotebanner">
        <QuoteBanner />
      </section>


      {/* Sección de Contacto (Formulario) */}

    </>
  );
};

export default Home;
