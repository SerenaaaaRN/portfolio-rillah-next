import React from 'react';

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);