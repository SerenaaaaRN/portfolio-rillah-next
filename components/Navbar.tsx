"use client";
import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Code2, Mail, Layout } from "lucide-react";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = React.useMemo(
    () => [
      { id: "home", label: "Home", icon: Home },
      { id: "about", label: "About", icon: User },
      { id: "experience", label: "Experience", icon: Briefcase },
      { id: "skills", label: "Skills", icon: Code2 },
      { id: "projects", label: "Projects", icon: Layout },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    []
  );

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <nav className="bg-white/90 backdrop-blur-md shadow-soft border border-slate-200/60 rounded-full px-2 py-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[95vw]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }
              `}
            >
              <Icon
                size={16}
                className={isActive ? "text-white" : "text-slate-500"}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
