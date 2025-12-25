import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    className = '', 
    ...props 
}) => {
    const baseStyles = "px-4 py-2 rounded font-bold transition-all duration-200";
    
    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700 border-none",
        outline: "bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-red-500 hover:text-red-500",
        ghost: "bg-transparent text-gray-600 dark:text-gray-400 hover:text-red-500"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
};