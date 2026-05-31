import ProductCarousel from "../../components/carousel/ProductCarousel";

import Banner from "../../components/Banner";
import Beneficios from "../../components/beneficios/Beneficios";
import QuoteBanner from "../../components/QuoteBanner/QuoteBanner";
import Nosotros from "../../components/NosotrosSection/index";

const Home = () => {


  return (
    <>
      {/* Sección de Banner */}
      <section id="inicio">
        <Banner />
      </section>

      <section id="nosotros">
        <Nosotros />
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
