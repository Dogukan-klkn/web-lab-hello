import React from 'react';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled,
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900';

    const variants = {
        primary: 'bg-primary text-white hover:bg-blue-800 dark:bg-primary dark:hover:bg-blue-700 focus:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-blue-700 dark:bg-secondary dark:hover:bg-blue-600 focus:ring-secondary',
        danger: 'bg-error text-white hover:bg-red-700 dark:bg-error dark:hover:bg-red-600 focus:ring-error',
        ghost: 'text-primary hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800 focus:ring-primary bg-transparent',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || sizes.md;
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return (
        <button
            disabled={disabled}
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
