import './thanks.sass';
import logoMeca from "../../assets/img/mecaproLogo.png"

const Thanks = () => {
    return (
        <div className='container-thanks'>
            <div className="thanks-card">
                <img src={logoMeca} alt="Logo Mecapro" className="logo-thanks" />
                <div className="thanks-content">
                    <h1>¡Gracias por comunicarte a Mecapro!</h1>
                    <p>El formulario ha sido enviado con éxito.</p>
                    <button
                        type="submit"
                        className="btn btn-accent-form"
                        onClick={() => window.location.href = "/"}
                    >
                        Regresar a Mecapro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Thanks;