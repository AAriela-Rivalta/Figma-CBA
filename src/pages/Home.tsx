import { AboutSection } from "../components/ui/AboutSection"
import img1 from '../components/imagenes/img1.jpeg'
import img2 from '../components/imagenes/img2.jpeg'
import img3 from '../components/imagenes/img3.jpeg'
import img4 from '../components/imagenes/img4.jpeg'
import { FeatureSection } from "../components/ui/FeatureSection"
import img5 from '../components/imagenes/img5.jpeg'
import img6 from '../components/imagenes/img6.jpeg'
import img7 from '../components/imagenes/img7.jpeg'
import img8 from '../components/imagenes/img 8.jpeg'
import { InfoCardsSection } from "../components/ui/InfoCardsSection"
import { TestimonialSection } from "../components/ui/TestimonialsSection"
import { Banner } from "../components/ui/header"
import img13 from '../components/imagenes/img13.jpeg'
import {StepperReserva} from "../components/ui/StepperReserva"

export function Home() {
    return (
        <>
            <AboutSection 
                tagline="Nuestro pueblo"
                title="Colaborando con la protección de un entorno único en Argentina"
                imagenes={{
                 main: img1,
                    topRight: img2,
                    bottomLeft: img3,
                    bottomRight: img4
                }}
                description={
                    <>
                        <p><strong className=" text-[#cd6d22]">La Cumbrecita es un pequeño pueblo ubicado en el corazón de las Sierras Grandes de Córdoba.</strong>
                            Es el primer pueblo peatonal del país y una reserva natural estricta, donde se prioriza la 
                            convivencia armónica entre las personas y el entorno.
                        </p>
                     <p><strong>Aquí no circulan autos. Se camina entre árboles centenarios, arroyos de agua cristalina y 
                         senderos que invitan al descanso y la contemplación.</strong> Esta forma de vivir, simple y natural, 
                            se sostiene con esfuerzo. Por eso cada visita importa, y cada gesto de respeto también.</p>
                    </>
                }

            />
            
            <FeatureSection />

            <div className="bg-[#f7f4f0]">
            <AboutSection 
                tagline="Recomendaciones"
                title="Antes de visitarnos, tené en cuenta:"
                imagenes={{
                 main: img5,
                    topRight: img6,
                    bottomLeft: img7,
                    bottomRight: img8
                }}
                description={
                    <>
                        <p>• Al ingreso del pueblo, nuestros informantes <strong>le indicarán donde dejar su vehículo.</strong> 
                        <br />• No hay <strong>cajero automático ni banco.</strong> 
                        <br />• No contamos con <strong>estación de servicio.</strong>
                        <br />• <strong>Recomendamos traer:</strong> calzado cómodo, abrigo, protector solar, lentes de sol 
                        <br />• Está <strong>prohibido cazar o dañar</strong> flora y fauna.
                        <br />• Las <strong>excursiones largas</strong> deben realizarse con <strong>guías habilitados.</strong></p>
                    </>
                }

            />
            </div>

            
            <InfoCardsSection />

            <div className="bg-[#f7f4f0]">
            <StepperReserva />
            </div>

            <TestimonialSection />

            <Banner 
                title="Estacionás tu auto, pero ponés en movimiento la preservación de un tesoro natural"
                subtitle="La Cumbrecita es más que un destino. Es un refugio, una experiencia, un compromiso con la naturaleza. 
                    Y ese compromiso también es tuyo, cuando elegís visitarnos con respeto ¡Gracias por ser parte!"
                bgImage={img13}
                />


            

        </>
    )
}