import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-slate-900 selection:text-white relative bg-linear-to-br from-white-200 via-gray-50 to-slate-200 overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top Right Blob - Blue/Indigo */}
        <div className="absolute top-0 right-[-10%] w-160 h-160 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>

        <div className="absolute top-[20%] left-[-10%] w-140 h-140 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="absolute bottom-[-10%] right-[20%] w-140 h-160 bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24 md:space-y-32 pb-20 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
