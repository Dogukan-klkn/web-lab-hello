import React from 'react';

export default function Alert({
    title,
    children,
    variant = 'info',
    dismissible = false,
    onDismiss,
    className = '',
    ...props
}) {
    const baseStyles = 'p-4 rounded-md border flex items-start gap-3';

    const variants = {
        info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-200',
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-800 dark:text-green-200',
        warning: 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200',
        error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-800 dark:text-red-200',
    };

    const variantStyles = variants[variant] || variants.info;

    return (
        <div role="alert" className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            <div className="flex-grow">
                {title && <h4 className="font-semibold mb-1">{title}</h4>}
                <div className="text-sm opacity-90">{children}</div>
            </div>
            {dismissible && (
                <button
                    type="button"
                    onClick={onDismiss}
                    aria-label="Kapat"
                    className="shrink-0 p-1 opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current rounded"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}
