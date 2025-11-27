import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: "bg-slate-900 text-white border-transparent",
    secondary: "bg-slate-100 text-slate-700 border-transparent hover:bg-slate-200",
    outline: "text-slate-600 border-slate-200 hover:bg-slate-50",
    success: "bg-green-50 text-green-700 border-green-200 ring-1 ring-green-500/10"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};