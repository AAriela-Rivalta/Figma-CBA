import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';


import img12 from "../imagenes/img12.jpeg";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Familia Rodríguez",
    role: "Visitantes de Buenos Aires",
    text: "El estacionamiento fue muy fácil de reservar y nos permitió disfrutar de La Cumbrecita sin preocupaciones. El personal fue muy amable.",
    avatar: img12,
  },
  {
    name: "Carlos Méndez",
    role: "Turista de Córdoba",
    text: "Excelente servicio. Poder reservar mi lugar con anticipación hizo que nuestra visita fuera mucho más placentera. El proceso fue sencillo.",
    avatar: img12,
  },
  {
    name: "Laura Fernández",
    role: "Visita frecuente",
    text: "Como visito La Cumbrecita varias veces al año, este sistema es un gran avance. Ahora puedo planificar con tranquilidad.",
    avatar: img12,
  },
  {
    name: "María López",
    role: "Turista de Rosario",
    text: "La reserva online nos ahorró muchísimo tiempo. Llegamos y ya teníamos todo resuelto. Muy organizado y práctico.",
    avatar: img12,
  },
  {
    name: "Javier Peralta",
    role: "Visitante por el día",
    text: "Me sorprendió lo simple que fue el sistema. En pocos pasos ya tenía mi lugar asegurado. Sin dudas lo volvería a usar.",
    avatar: img12,
  },
  {
    name: "Ana y Pablo Torres",
    role: "Pareja de viajeros",
    text: "Poder reservar el estacionamiento antes de llegar nos dio mucha tranquilidad. La experiencia fue excelente de principio a fin.",
    avatar: img12,
  },
];

export function TestimonialSection() {
 return (
        <section className="mx-auto px-6 py-24 bg-[#f7f4f0] dark:bg-[#4d4c4c] testimonials-swiper relative overflow-hidden">
            <div className="text-center mb-16">
                <span className="text-[#cd6d22] font-bold text-lg block mb-4">
                    Testimonios de nuestros visitantes
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333333] dark:text-white">
                    Lo que dicen quienes ya <br /> vivieron la experiencia
                </h2>
            </div>

            <div className="relative pb-20 max-w-full">

            <Swiper 
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                
                
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-10 rounded-3xl h-full flex flex-col shadow-sm border border-transparent hover:border-[#EEE9E1] transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src={t.avatar} 
                                    alt={t.name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h4 className="font-bold text-[#333333] text-lg">{t.name}</h4>
                                    <p className="text-[#cd6d22] text-xs font-medium uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                                "{t.text}"
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

            {/* Estilos personalizados para los puntitos naranjas */}
            <style>{`
                .testimonials-swiper .swiper {
                    overflow: visible;
                }
                .testimonials-swiper .swiper-pagination-bullet {
                    background: #d1d1d1;
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                }
                .testimonials-swiper .swiper-pagination-bullet-active {
                    background: #cd6d22 !important;
                    width: 30px;
                    border-radius: 10px;
                }
                .testimonials-swiper .swiper-pagination {
                    bottom: -25px !important;
                }
            `}</style>
        </section>
    );
}
