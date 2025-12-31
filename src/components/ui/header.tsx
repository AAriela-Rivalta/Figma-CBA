interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

//esta en Layouts, es la para te la imagen y esta al final de la pagina antes del footer
export function Banner ({title, subtitle, bgImage}: BannerProps) {
    return (
        <div 
      className="relative w-full px-10 py-35 flex items-center flex-col justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
    >
      {/* Capa oscura (Overlay) para que el texto blanco se lea bien sobre cualquier foto */}
      {bgImage && <div className="absolute inset-0 bg-black/40 z-0"></div>}

      {/* Contenido con z-10 para estar sobre el overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-bold text-4xl text-white drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="text-white italic text-lg mt-2 drop-shadow-md">{subtitle}</p>
        )}
      </div>
    </div>
    );
}