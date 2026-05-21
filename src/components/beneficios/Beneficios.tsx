import './Beneficios.sass'

const Beneficios = () => {
    return (
        <section className="benefits" id="benefits">
            <div className="container">
                <div className="benefits-container">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fa-solid fa-gear" style={{ color: "#FFC122" }}></i>
                        </div>
                        <div className="benefits-txt">
                            <h3>PRODUCTOS <br />DE CALIDAD</h3>
                            <p>Trabajamos con las <br /> mejores marcas del<br />mercado.</p>
                        </div>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fa-solid fa-shield" style={{ color: "#FFC122" }}></i>
                        </div>
                        <div className="benefits-txt">
                            <h3>ASESORÍA <br />ESPECIALIZADA</h3>
                            <p>Te ayudamos a encontrar<br />la mejor solución para <br />tu industria.</p>
                        </div>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fa-solid fa-truck-fast" style={{ color: "#FFC122" }}></i>
                        </div>
                        <div className="benefits-txt">
                            <h3>ENTREGA <br />RÁPIDA</h3>
                            <p>Logistica eficiente para que <br />tus operaciones nunca<br />se detengan.</p>
                        </div>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fa-solid fa-headset" style={{ color: "#FFC122" }}></i>
                        </div>
                        <div className="benefits-txt">
                            <h3>SOPORTE <br />TÉCNICO</h3>
                            <p>Acompañamiento antes,<br />durante y después<br />de tu compra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficios