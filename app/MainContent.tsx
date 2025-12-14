"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MyJourney } from "@/components/MyJourney";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Guestbook } from "@/components/Guestbook";
import { Footer } from "@/components/Footer";

// ========= ANIMATION VARIANTS ========= //
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

interface Review {
  id: number;
  created_at: string;
  name: string;
  message: string;
}

interface MainContentProps {
  reviews: Review[];
  addReview: (formData: FormData) => Promise<void>;
  error: Error | null;
}

// ========= MAIN CONTENT ========= //
export const MainContent: React.FC<MainContentProps> = ({ reviews, addReview, error }) => {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-slate-900 selection:text-white relative bg-linear-to-br from-white-200 via-gray-50 to-slate-200 overflow-hidden">
      {/* NAVBAR */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Navbar />
      </motion.div>

      {/* FLOATING BLOBS */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-160 h-160 bg-indigo-100/40 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-140 h-140 bg-blue-100/40 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-140 h-160 bg-slate-200/30 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24 md:space-y-32 pb-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <MyJourney />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Projects />
        </motion.div>
        {/* GUESTBOOK */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Guestbook
            initialReviews={reviews || []}
            addReview={addReview}
            error={error}
          />
        </motion.div>
      </main>

      {/* FOOTER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};
