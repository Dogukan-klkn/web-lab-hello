import React from 'react';

export default function Card({ title, children, image, imageAlt = '', footer, variant = 'elevated', className = '' }) {
    const baseStyles = 'rounded-lg overflow-hidden flex flex-col transition-shadow dark:text-gray-100';

    const variants = {
        elevated: 'bg-white shadow-md hover:shadow-lg dark:bg-gray-800',
        outlined: 'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700',
        filled: 'bg-gray-100 dark:bg-gray-800',
    };

    const variantStyles = variants[variant] || variants.elevated;

    return (
        <div className={`${baseStyles} ${variantStyles} ${className}`}>
            {image && (
                <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
            )}
            <div className="p-5 flex-grow flex flex-col">
                {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
                <div className="flex-grow text-gray-700 dark:text-gray-300">
                    {children}
                </div>
            </div>
            {footer && (
                <div className="p-5 flex justify-end gap-2 border-t border-gray-200 dark:border-gray-700 mt-auto bg-gray-50 dark:bg-gray-900/50">
                    {footer}
                </div>
            )}
        </div>
    );
}
