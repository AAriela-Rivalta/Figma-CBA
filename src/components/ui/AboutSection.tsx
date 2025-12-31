import React from "react";

interface AboutSectionProps {
    tagline: string;
    title: string;
    description: React.ReactNode; //aca paso los parrafos como nodos de react
    imagenes: {
        main: string;
        topRight: string;
        bottomLeft: string;
        bottomRight: string;
    }
}

export function AboutSection({ tagline, title, description, imagenes }: AboutSectionProps) {
   return (
        /* Cambiamos grid-cols-2 por grid-cols-1 y md:grid-cols-2 */
        <section className="max-w-7xl mx-auto py-12 md:py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center font-sans">
           
            {/* Texto: En móvil va primero, en PC a la izquierda */}
            <div className="flex flex-col gap-4 md:gap-6">
                <span className="text-[#cd6d22] font-semibold text-sm uppercase tracking-wider">
                    {tagline}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
                    {title}
                </h2>
                <div className="text-[#333333] text-sm md:text-base space-y-4 leading-relaxed">
                    {description}
                </div>
            </div>

            {/* Imágenes: En móvil van debajo del texto */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-3 h-75 md:h-125">
                <div className="row-span-2">
                    <img src={imagenes.main} alt="Main" className="w-full h-full object-cover rounded-2xl shadow-sm" />
                </div>

                <div className="col-span-2">
                    <img src={imagenes.topRight} alt="Top Right" className="w-full h-full object-cover rounded-2xl shadow-sm" />
                </div>

                <div className="h-full">
                    <img src={imagenes.bottomLeft} alt="Bottom Left" className="w-full h-full object-cover rounded-2xl shadow-sm" />
                </div>
                
                <div className="h-full">
                    <img src={imagenes.bottomRight} alt="Bottom Right" className="w-full h-full object-cover rounded-2xl shadow-sm"/>
                </div>
            </div>
        </section>
    )
   
}