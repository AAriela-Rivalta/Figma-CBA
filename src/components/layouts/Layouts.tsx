import { Link, Outlet } from "react-router-dom";
import {Banner} from '../ui/header';
import fondo from '../imagenes/fondo.jpeg';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export function Layouts() {
    return (
        <>
            <header className="bg-[#cd6d22]">
                <div className="flex justify-between p-10 py-6">
                    <div >
                        <Link to="/" className="text-white font-serif text-3xl font-bold italic">La Cumbrecita</Link>
                    </div>

                    <nav>
                    <ul className=" flex items-center gap-2">
                        <li><Link to="/" className="hover:underline text-white">Home</Link></li>
                        <li><Link to="/new-reserva" className=" hover:underline text-white">Reservar</Link></li>
                        <li><Link to="/" className=" hover:underline text-white">Iniciar sesión</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className=" bg-[#eee9e1] px-10 py-2 flex justify-between  ">
                    <p className="text-[#333333] text-xs">Estacionamiento oficial de la reserva La Cumbrecita</p>
                    <p className="text-[#333333] text-xs">Horario de atención de 08:00 a 20:00 hs.</p>
                </div>
                <Banner 
                title="Bienvenidos a La Cumbrecita"
                subtitle="Una reserva natural peatonal única en el país"
                bgImage={fondo}
                buttonConfig1={{
                    label: "Descubrí por qué protegerla ",
                    variant: "primary",
                    to: "https://lacumbrecita.gob.ar/index.html"
                }}
                buttonConfig2={{
                    label: "Reservá tu estacionamiento ",
                    variant: "secondary",
                    to: "/new-reserva"
                }}
                
                />
                
            </header>
            <Outlet />
            <footer className=" bg-[#333333] text-white">
                {/* Sección Principal */}
                <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Columna 1: Logo y Eslogan */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold italic">La Cumbrecita</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <span className="font-bold text-white italic">Estacionamiento oficial de La Cumbrecita.</span> Tu lugar 
                            <br />asegurado para disfrutar de nuestro pueblo peatonal.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Enlaces rápidos</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/new-reserva" className="hover:text-white transition-colors">Reservar</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Iniciar sesión</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>+54 (3546) 481-981</li>
                            <li>La Cumbrecita, Córdoba, Argentina</li>
                            <li>info@estacionamientolacumbrecita.com</li>
                            <li>Horario: 8:00 - 20:00 hs.</li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes Sociales */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Visitanos en redes</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-[#cd6d22] transition-colors">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-[#cd6d22] transition-colors">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-[#cd6d22] transition-colors">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Barra Inferior (Beige) */}
                <div className="bg-[#eee9e1]">
                    <div className="max-w-7xl mx-auto px-10 py-5 flex flex-col md:flex-row justify-between items-center text-[#333333]  gap-4">
                        <p>La Cumbrecita - 2025 © Derechos Reservados</p>
                        <div className="flex gap-10">
                            <Link to="/" className="hover:underline">Política de privacidad</Link>
                            <Link to="/" className="hover:underline">Términos de uso</Link>
                            <Link to="/" className="hover:underline">Cookies</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

