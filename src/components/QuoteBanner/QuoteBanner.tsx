import { useState } from "react";
import "./QuoteBanner.css";
import { CotizaForm } from "../form/Form"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileLines,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function QuoteBanner() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <section className="quote-banner" id="contacto">
                <div className="quote-left">
                    <div className="quote-icon">
                        <FontAwesomeIcon icon={faFileLines} />
                    </div>

                    <div className="quote-text">
                        <h2>¿NECESITAS UNA COTIZACIÓN?</h2>
                        <p>Contáctanos y recibe una propuesta personalizada.</p>
                    </div>
                </div>

                <button onClick={() => setShowForm(!showForm)} className="quote-button">
                    COTIZAR AHORA
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </section>
            {
                showForm &&
                <section id="contacto">
                    <CotizaForm />
                </section>
            }
        </>
    );
}