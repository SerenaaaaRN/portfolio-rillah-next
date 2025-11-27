"use client";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-slate-900 text-lg">Rillah</h3>
          <p className="text-slate-500 text-sm mt-1">
            Built with React & Tailwind CSS (Learning in Progress)
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
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
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>

        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Rillah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
