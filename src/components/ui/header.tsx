import Button from "./Button";


interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  buttonConfig1?: {
    label: string;
    variant: 'primary' | 'secondary';
    to?: string;
    onClick?: () => void;
  };
  buttonConfig2?: {
    label: string;
    variant: 'primary' | 'secondary';
    to?: string;
    onClick?: () => void;
  };
}

//esta en Layouts, es la para te la imagen y esta al final de la pagina antes del footer
export function Banner ({title, subtitle, bgImage, buttonConfig1, buttonConfig2}: BannerProps) {
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

      <div className="z-10 flex flex-wrap justify-center gap-5 mt-8">
        {buttonConfig1 && (
                <div className="pt-4">
                    <Button 
                        label={buttonConfig1.label} 
                        variant={buttonConfig1.variant} 
                        to={buttonConfig1.to}
                        onClick={buttonConfig1.onClick}
                />
                </div>
                 )} 
                 {buttonConfig2 && (
                <div className="pt-4">
                    <Button 
                        label={buttonConfig2.label} 
                        variant={buttonConfig2.variant} 
                        to={buttonConfig2.to}
                        onClick={buttonConfig2.onClick}
                />
                </div>
                 )}  
      </div>
      
    </div>
    );
}