import React from 'react';
import { Link } from 'react-router-dom';


interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  to?: string; 
  onClick?: () => void;
}

const Button = ({ label, variant, to, onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded-md font-medium transition-colors duration-200 inline-block text-center";
  const variantStyles = {
    primary: "bg-[#CD6D22] text-white hover:bg-[#b55d1d]",
    secondary: "bg-[#EEE9E1] text-[#5C493C] hover:bg-[#e5dfd5]",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]}`;

  // Si no hay "to", es un botón normal con onClick
  if (!to) {
    return (
      <button onClick={onClick} className={combinedStyles}>
        {label}
      </button>
    );
  }

  // Detectar si el link es externo (empieza con http o https)
  const isExternal = to.startsWith('http');

  if (isExternal) {
    return (
      <a 
        href={to} 
        className={combinedStyles} 
        target="_blank" 
        rel="noopener noreferrer" // Seguridad para links externos
      >
        {label}
      </a>
    );
  }

  // Si es interno, usamos Link de React Router
  return (
    <Link to={to} className={combinedStyles}>
      {label}
    </Link>
  );
};

export default Button;