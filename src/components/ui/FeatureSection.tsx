import React from "react";
import { PiMountainsFill, PiFlowerLotusLight } from "react-icons/pi";
import { FaPersonWalking } from "react-icons/fa6";

interface FeatureCardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
}

function FeatureCard ({Icon, title, description}: FeatureCardProps) {
    return (
        <div className="bg-[#f7f4f0] hover:bg-[#EEE9E1] p-8 rounded-3xl flex flex-col items-center text-center shadow-sm">
            {/* Contenedor del Icono */}
            <div className="w-16 h-16 mb-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Icon className="text-3xl text-[#4a3f35]" />
            </div>
            
            <h3 className="text-[#4a3f35] font-bold text-2xl mb-3 leading-tight">
                {title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export function FeatureSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
            <div className="text-center mb-16">
                <span className="text-[#cd6d22] font-bold text-xl  block mb-4">
                    Convivencia con la naturaleza
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight">
                    ¿Por qué no se puede <br className="hidden md:block" /> ingresar con vehículos?
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    Icon={FaPersonWalking} 
                    title="Porque es un pueblo peatonal"
                    description="Es parte de su identidad: caminar sin ruido, sin bocinas, sin humo."
                />
                <FeatureCard 
                    Icon={PiMountainsFill} 
                    title="Porque es una reserva natural protegida"
                    description="Senderos, flora y fauna necesitan un entorno tranquilo, sin tránsito."
                />
                <FeatureCard 
                    Icon={PiFlowerLotusLight} 
                    title="Porque es una experiencia única"
                    description="Es una experiencia tranquila y segura para familias, niños, adultos mayores."
                />
            </div>
        </section>
    )
}