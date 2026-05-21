import './thanks.sass';
import logoVendrix from "../../assets/img/logo_vendrix_navbar.png";

const Thanks = () => {
    return (
        <div className='container-thanks'>
            <div className="thanks-card">
                <img src={logoVendrix} alt="Logo Vendrix" className="logo-thanks" />
                <div className="thanks-content">
                    <h1>¡Gracias por comunicarte a Vendrix!</h1>
                    <p>El formulario ha sido enviado con éxito.</p>
                    <button
                        type="submit"
                        className="btn btn-accent-form"
                        onClick={() => window.location.href = "/"}
                    >
                        Regresar a Vendrix
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Thanks;