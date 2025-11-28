import React from 'react';

interface AOSProps {
  "data-aos"?: string;
  "data-aos-offset"?: string;
  "data-aos-duration"?: string;
  "data-aos-easing"?: string;
  "data-aos-delay"?: string;
  "data-aos-anchor"?: string;
  "data-aos-anchor-placement"?: string;
  "data-aos-once"?: string;
  "data-aos-mirror"?: string;
  "data-aos-waw"?: string;
  "data-aos-disable"?: string;
}

export const SectionTitle: React.FC<{ title: string; subtitle?: string } & AOSProps> = ({ title, subtitle, ...aosProps }) => (
  <div className="mb-12 text-center" {...aosProps}>
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);