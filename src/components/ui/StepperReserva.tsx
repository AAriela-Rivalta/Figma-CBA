import { useState } from "react";
//useState para manejar estados, que estado esta ACTIVO
import img14 from '../imagenes/img14.jpeg'
import img15 from '../imagenes/img15.jpeg'
import img16 from '../imagenes/img16.jpeg'
import img17 from '../imagenes/img17.jpeg'

import Button from "./Button";

const stepContent = [ //Contenido del stapper
  {
    number: 1, //numero de paso
    title: "Datos personales",
    description: "Completá tus datos personales para iniciar la reserva.",
    image: img14
  },
  {
    number: 2,
    title: "Fecha y vehículo",
    description: "Elegí la fecha de tu reserva y completá los datos de tu vehículo.",
    image: img15
  },
  {
    number: 3,
    title: "Pago",
    description: "Seleccioná tu forma de pago y aboná el monto correspondiente de forma segura.",
    image: img16
  },
  {
    number: 4,
    title: "Confirmación",
    description: "Recibí tu QR para presentar al llegar. ¡Podés descargarlo o imprimirlo!",
    image: img17
  },
];

export function StepperReserva() {
  const [activeStep, setActiveStep] = useState(1); //arranca en el paso 1

  return (
    <section className="max-w-7xl mx-auto py-10 px-6"> {/*•max-w-7xl →ancho maximo •mx-auto → centrado horizontal •py-10 px-6 → padding vertical y horizontal*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"> {/*•gap-10 → espacio entre col*/}
        
        {/* Textos */}
        <div className="flex flex-col justify-center py-10"> {/* •Flex vertical •Centra el contenido •Padding vertical*/}
          <span className="text-[#cd6d22] font-bold text-sm uppercase tracking-widest block mb-4"> {/* • Texto chico, naranja, espaciado → subtítulo */}
            Paso a paso para reservar tu lugar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight mb-10 text-balance">
            ¿Cómo reservo mi lugar de estacionamiento?
          </h2>

          <div className="flex flex-col">
            {stepContent.map((step, index) => ( //Recorre el array y renderiza un StepItem por paso.
              <StepItem
                key={step.number}  //key → obligatorio en listas de teact
                number={step.number}
                title={step.title}
                description={step.description} //hasta aca se pasan los datos paso a paso 
                active={activeStep === step.number} //true solo si este paso esta activo 
                isCompleted={activeStep > step.number} //marca los pasos anteriores como completados
                isLast={index === stepContent.length - 1} //sirve para no dibujar la linea vertical en el ultimo
                onClick={() => setActiveStep(step.number)} //al clickear → cambia el paso a activo
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-5 mt-4 ">
            <Button 
              label="Hacer mi reserva -->" 
              variant="primary" 
              to="/new-reserva" 
            />
          </div>
          
        </div>

        {/* Imagenes */}
        <div className="flex items-center justify-center relative bg-transparent"> {/*Contenedor general de la imagen */}
          <div className="relative w-full h-fit flex items-center justify-center"> {/*Contenedor relativo para poder posicionar las imagenes absolutas */}
            {stepContent.map((step) => ( //renderiza todas las imagenes, pero solo una es visible
              <img
                key={step.number}
                src={step.image}
                alt={step.title} //•imagen correspondiente al paso •alt accesibilidad
                className={`max-w-full h-auto rounded-2xl shadow-2xl transition-all duration-700 absolute
                  ${activeStep === step.number 
                    ? "opacity-100 scale-100 relative" 
                    : "opacity-0 scale-95 pointer-events-none"}`}
                    //•si esta activa: visible, escala normal, relative para ocupar el espacio •si NO esta acctiva: invisible, un poco mas chica, no recibe clicks
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StepItem({ number, title, description, active, isLast, isCompleted, onClick }: any) { //subcomponente que representa un paso 
  return (
    <div 
      onClick={onClick}
      className={`relative flex gap-6 pb-8 cursor-pointer group last:pb-0`} //•clickeable •flex horizontal •espacio entre circulo y texto
    >
      {!isLast && ( //solo si NO es el ultimo paso 
        <div 
          className={`absolute left-4.5 top-10 w-[2.5px] h-[calc(100%-40px)] transition-colors duration-500 ${ //•Linea vertical entre pasos •posicionada debajo del círculo
            isCompleted ? "bg-[#cd6d22]" : "bg-gray-200" //•naranja si ya esta completo •gris si no 
          }`} 
        />
      )}

      <div
        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-bold transition-all duration-500 ${
            //•circulo •centra el número •z-10 para poner arriba de la linea
          active || isCompleted //•cambia el color si esta activo o ya paso
            ? "bg-[#cd6d22] border-[#cd6d22] text-white"
            : "bg-white border-gray-200 text-gray-400"
        }`}
      >
        {number}
      </div>

      <div className="flex flex-col pt-1">
        <h3 className={`font-bold text-xl transition-colors duration-300 ${active ? "text-[#cd6d22]" : "text-[#333333]/60"}`}> 
          {title}:
        </h3> {/*•Titulo resaltado si está activo •Atenuado si no*/}

        {/* La descripción solo aparece si está activo */}
        <div className={`overflow-hidden transition-all duration-500 ${active ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"}`}> {/*•Si está activo → aparece •Si no → se colapsa */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm"> {/*•Texto descriptivo del paso */}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}