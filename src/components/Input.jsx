import React, { useId } from 'react';

export default function Input({
    label,
    type = 'text',
    error,
    helpText,
    id,
    disabled,
    className = '',
    ...props
}) {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helpId = `${inputId}-help`;

    const ariaDescribedBy = [
        error ? errorId : null,
        helpText ? helpId : null,
    ].filter(Boolean).join(' ') || undefined;

    let baseBorder = 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary';
    if (error) {
        baseBorder = 'border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-red-500';
    }

    const baseInputStyles = `w-full rounded-md border shadow-sm px-3 py-2 focus:outline-none focus:ring-1 bg-white dark:bg-gray-800 dark:text-gray-100 transition-colors ${baseBorder}`;
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-900' : '';

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                disabled={disabled}
                aria-describedby={ariaDescribedBy}
                aria-invalid={!!error}
                className={`${baseInputStyles} ${disabledStyles}`}
                {...props}
            />
            {error && (
                <p id={errorId} role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">
                    {error}
                </p>
            )}
            {helpText && !error && (
                <p id={helpId} className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {helpText}
                </p>
            )}
        </div>
    );
}
