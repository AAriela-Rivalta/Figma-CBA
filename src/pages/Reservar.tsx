import { useState } from "react";
import { Link } from "react-router-dom";

export function Reservar() {
  // Controlamos qué secciones están "abiertas"
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = (current: number) => {
    setActiveStep(current + 1);
  };
  const handleCancel = () => {
  setActiveStep(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <section className="bg-[#fbf7f3] min-h-screen py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#cd6d22] font-bold text-sm uppercase tracking-widest block mb-2">Reserva de lugar</span>
          <h1 className="text-4xl font-bold text-[#333333]">Completá los pasos para tu reserva</h1>
        </div>

        {/* PASO 1: DATOS PERSONALES */}
        <div className={`transition-all duration-500 ${activeStep >= 1 ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-6 flex-col">
              <span className="w-8 h-8 rounded-full bg-[#cd6d22] text-white flex items-center justify-center font-bold">1</span>
              <h2 className="text-xl font-bold text-[#333333]">Datos personales</h2>
              <p>Ingrese sus datos personales</p>
            </div>
            
            {/*Campos*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Nombre</label>
                    <input type="text" placeholder="Ingresá tu nombre"className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Apellido</label>
                    <input type="text" placeholder="Ingresá tu apellido"className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Email</label>
                    <input type="email" placeholder="ejemplo@email.com" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Teléfono</label>
                    <input type="tel" placeholder="+54 9 351 123 4567" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Tipo de documento</label>
                    <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]" defaultValue="dni">
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="cuil">CUIL</option>
                        <option value="cuit">CUIT</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Número de documento</label>
                    <input type="n° doc" placeholder="12345678" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">Proincia</label>
                    <input type="prov" placeholder="Ingrese su provincia de origen" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#333333]">País</label>
                    <input type="pais" placeholder="Ingrese su país de origen" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#cd6d22]"/>
                </div>

            </div>

            {activeStep === 1 && (
                
              <div className="mt-6 flex gap-3">
  <button
    onClick={handleCancel}
    className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-100 transition"
  >
    Cancelar
  </button>

  <button
    onClick={() => handleNext(1)}
    className="bg-[#cd6d22] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#b35d1d] transition-all"
  >
    Confirmar datos y continuar
  </button>
</div>
            )}
          </div>
        </div>

        {/* PASO 2: VEHÍCULO Y VISITA */}
        <div className={`transition-all duration-500 ${activeStep >= 2 ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${activeStep >= 2 ? "bg-[#cd6d22] text-white" : "bg-gray-200 text-gray-400"}`}>2</span>
              <h2 className="text-xl font-bold text-[#333333]">Datos del vehículo y visita</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none">
                <option>Tipo de vehículo</option>
                <option>Automóvil</option>
                <option>Moto</option>
              </select>
              <input type="text" placeholder="Patente" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none" />
              <input type="date" className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none" />
              <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none">
                <option>Cantidad de personas</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            {activeStep === 2 && (
              <div className="mt-6 flex gap-3">
                <button onClick={handleCancel} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-100 transition">
                    Cancelar
                </button>

                <button onClick={() => handleNext(2)}className="bg-[#cd6d22] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#b35d1d] transition-all">
                    Confirmar datos y continuar
                </button>
              </div>
              
            )}
          </div>
        </div>

        {/* PASO 3: PAGO */}
        <div className={`transition-all duration-500 ${activeStep >= 3 ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${activeStep >= 3 ? "bg-[#cd6d22] text-white" : "bg-gray-200 text-gray-400"}`}>3</span>
              <h2 className="text-xl font-bold text-[#333333]">Método de pago</h2>
            </div>
            
            <div className="p-4 border-2 border-[#cd6d22] bg-orange-50/30 rounded-2xl flex items-center mb-6">
              <div className="w-4 h-4 rounded-full border-4 border-[#cd6d22] mr-3"></div>
              <span className="text-sm font-bold text-[#333333]">Mercado Pago</span>
            </div>

            {activeStep === 3 && (
              <div className="mt-6 flex gap-3">
                <button onClick={handleCancel} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-100 transition">
                    Cancelar
                </button>

                <button onClick={() => handleNext(3)}className="bg-[#cd6d22] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#b35d1d] transition-all">
                    Confirmar datos y continuar
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PASO 4: CONFIRMACIÓN (QR) */}
        {activeStep >= 4 && (
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-[#cd6d22] animate-fadeIn text-center">
            <h3 className="font-bold text-[#333333] mb-6 text-xl">¡Reserva confirmada!</h3>
            <div className="flex justify-center mb-6">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CUMBRECITA" alt="QR" className="w-40 h-40" />
            </div>
            <p className="text-gray-500 text-xs mb-8">Presentá este código al ingresar al estacionamiento.</p>
            <Link to="/" className="inline-block bg-[#cd6d22] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all">
              Volver al Inicio
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}