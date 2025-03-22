
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  textClassName?: string;
  onClick?: () => void;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  textClassName = '',
  onClick, 
  showText = true 
}) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center space-x-2 ${className}`}
      onClick={onClick}
    >
      <img 
        src="/lovable-uploads/3c06a21a-fe6e-41cf-bb86-8d4aa5207a5b.png" 
        alt="Tecsup Logo" 
        className="h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-105" 
      />
      {showText && (
        <div className={`flex flex-col items-start ${textClassName}`}>
          <span className="text-lg font-bold text-tecsup tracking-tight leading-none">
            Penguins
          </span>
          <span className="text-sm font-medium text-gray-600 tracking-tight leading-none">
            on Road
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
