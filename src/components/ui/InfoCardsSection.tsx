import img9 from '../imagenes/img9.jpeg'
import img10 from '../imagenes/img10.jpeg'
import img11 from '../imagenes/img11.jpeg'

interface InfoCardProps {
    image: string;
    description: string;
}

export function InfoCardsSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <span className="text-[#cd6d22] font-bold text-lg block mb-4">
                    ¿Por qué se cobra estacionamiento?
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight max-w-3xl mx-auto">
                    El monto que abonás al estacionar se utiliza para:
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard 
                    image={img9}
                    description="Mantener senderos, cartelería y espacios públicos."
                />
                <InfoCard 
                    image={img10}
                    description="Cuidar el ambiente y la biodiversidad."
                />
                <InfoCard 
                    image={img11}
                    description="Apoyar tareas de control, limpieza y conservación."
                />
            </div>
        </section>
    );
}

function InfoCard({ image, description }: InfoCardProps) {
    return (
        <div className="bg-[#f7f4f0] hover:bg-[#EEE9E1] rounded-3xl flex flex-col items-center text-center shadow-sm overflow-hidden transition-colors duration-300 group">
            {/* Contenedor de la Imagen con Zoom */}
            <div className="w-full h-64 overflow-hidden shrink-0">
                <img 
                    src={image} 
                    alt="Info" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            
            {/* Texto debajo de la imagen */}
            <div className="p-8 flex items-center justify-center">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
}

