import "./AboutUs.scss";
import team from "../../assets/img/team.png";
import { ReviewCard } from "./ReviewCard";

export default function AboutUs() {
    return (
        <section className="about-us">

            <div className="top-content">

                <ReviewCard
                    author="Muriel Marroquín"
                    position="Gerente de operaciones para Centro América."
                    text="MECAPRO es una empresa destacada en el sector industrial guatemalteco, especializada en servicios estructurales industriales y en el suministro de componentes para la industria del país. Su experiencia en fabricación, montaje y mantenimiento de estructuras metálicas le ha permitido posicionarse como un aliado estratégico para empresas que requieren soluciones confiables, eficientes y adaptadas a los más altos estándares de calidad industrial.
                            Uno de los principales atributos de MECAPRO es su enfoque en la calidad del trabajo, el cumplimiento de tiempos de entrega y la seguridad industrial, aspectos clave en los proyectos de infraestructura y manufactura pesada. Empresas del sector estructural e industrial en Guatemala destacan actualmente por integrar procesos modernos de ingeniería, soldadura certificada y control de calidad, tendencias que MECAPRO refleja dentro de sus servicios especializados.
                            Además, el suministro de componentes industriales para todo tipo de plantas industriales representa un valor agregado importante, ya que contribuye al mantenimiento y optimización de equipos esenciales para la producción. La experiencia en este sector permite a MECAPRO comprender las necesidades específicas de la industria pesada, ofreciendo soluciones prácticas y eficientes para sus clientes.
                            En un entorno industrial altamente competitivo, MECAPRO se consolida como una empresa comprometida con la innovación, la responsabilidad y la excelencia técnica, aportando al desarrollo de la infraestructura y la industria nacional mediante servicios especializados de alto nivel."
                />

                <ReviewCard
                    author="Ángeles Martínez"
                    position="Gerente comercial para Guatemala."
                    text="En un mercado industrial donde la precisión, la resistencia estructural y la continuidad operativa son factores críticos, MECAPRO se posiciona como una empresa estratégica para el desarrollo de la industria en Guatemala. Su enfoque especializado en servicios estructurales industriales y suministro de componentes técnicos le permite atender proyectos de alta exigencia con soluciones integrales orientadas a la eficiencia, seguridad y durabilidad.
                            La empresa destaca por su capacidad para participar en procesos clave relacionados con fabricación, montaje, mantenimiento y fortalecimiento de estructuras metálicas industriales, contribuyendo directamente a la productividad y sostenibilidad de plantas industriales. Este sector demanda altos estándares técnicos, materiales de calidad y cumplimiento normativo constante, características que hoy representan ventajas competitivas determinantes dentro de la industria.
                            MECAPRO comprende las necesidades operativas de un mercado donde el tiempo de respuesta y la confiabilidad técnica son fundamentales. Por ello, su propuesta comercial se enfoca en brindar soluciones adaptadas a cada cliente, integrando experiencia técnica, conocimiento industrial y capacidad de ejecución en campo. Esta visión le permite convertirse en un aliado estratégico para empresas que buscan optimizar sus procesos industriales, ampliar su infraestructura o fortalecer sus operaciones productivas.
                            Gracias a su compromiso con la calidad, la responsabilidad y la atención personalizada, MECAPRO proyecta una imagen empresarial sólida y confiable dentro del sector industrial. Su capacidad para adaptarse a las exigencias del mercado y ofrecer soluciones técnicas de valor agregado fortalece su posicionamiento como proveedor clave para la industria cementera y concretera del país."

                />



                <div className="company-image">
                    <img
                        src={team}
                        alt="Instalaciones de la empresa"
                    />
                </div>

            </div>

            <div className="mission-vision">

                <div className="info-card">
                    <div className="icon">
                        <i className="fa-solid fa-bullseye" style={{ color: "#FFC122", }}></i>
                    </div>
                    <div>
                        <h3>MISIÓN</h3>

                        <p>
                            Proveer soluciones industriales de alta calidad
                            en maquinaria, repuestos e insumos.
                        </p>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon">
                        <i className="fa-solid fa-eye" style={{ color: "#FFC122" }}></i>
                    </div>
                    <div>
                        <h3>VISIÓN</h3>
                        <p>
                            Ser la empresa líder en soluciones industriales
                            en Latinoamérica.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};