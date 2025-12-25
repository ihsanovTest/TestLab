import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

// Объединяем типы для универсальности, хотя по заданию просили Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    className?: string;
    as?: 'textarea';
}

// Перегрузка компонента для поддержки textarea через проп "as"
export const Input = ({ label, className = '', as, ...props }: InputProps & { as?: 'input' | 'textarea' } & any) => {
    const baseStyles = "w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors";

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">{label}</label>}
            
            {as === 'textarea' ? (
                <textarea 
                    className={`${baseStyles} resize-y min-h-[100px] ${className}`} 
                    {...props} 
                />
            ) : (
                <input 
                    className={`${baseStyles} ${className}`} 
                    {...props} 
                />
            )}
        </div>
    );
};