import productosIndustriales from "../../assets/img/bannerMecapro.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <img src={productosIndustriales} alt="prod_Industriales" />
      <div className="banner-text">
        <h1>SOLUCIONES</h1>
        <h1 className="yellowText">QUE MUEVEN</h1>
        <h1>LA INDUSTRIA</h1>
        <p>Maquinaria, repuestos e insumos industriales <br />
          de alta calidad para maximizar el rendimiento <br />
          de tu operación </p>
        <a href="#productos" className="btn btn-accent">VER PRODUCTOS <i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  );
};

export default Banner;