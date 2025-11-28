"use client";
import React from "react";
import { AOSProps } from "./ui/AOSProps";

export const Footer: React.FC<AOSProps> = ({ ...aosProps }) => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-20" {...aosProps}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left" data-aos="fade-right" data-aos-delay="100">
          <h3 className="font-bold text-slate-900 text-lg">Rillah</h3>
          <p className="text-slate-500 text-sm mt-1">
            Still Learning
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-500 font-medium" data-aos="fade-up" data-aos-delay="200">
          <a href="#home" className="hover:text-slate-900 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-slate-900 transition-colors"
          >
            Projects
          </a>

        </div>

        <div className="text-xs text-slate-400" data-aos="fade-left" data-aos-delay="300">
          © {new Date().getFullYear()} Rillah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
