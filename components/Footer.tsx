"use client";
import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, subtleFadeUp } from "@/lib/variants";
import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/duhairillah-690679281/",
      icon: Linkedin,
    },
    { href: "https://github.com/SerenaaaaRN", icon: Github },
    {
      href: "https://www.instagram.com/__rillah?igsh=MWhvN21haXljNjFmNQ==",
      icon: Instagram,
    },
  ];

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#myjourney", label: "My Journey" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <motion.footer
      variants={StaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white/50 backdrop-blur-sm border-t border-slate-100 py-12 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <motion.div variants={subtleFadeUp} className="space-y-2">
          <h3 className="font-bold text-slate-900 text-lg">Rillah</h3>
          <p className="text-slate-500 text-sm">
            Still Learning
          </p>
        </motion.div>

        <motion.div
          variants={subtleFadeUp}
          className="flex flex-col items-center md:items-start gap-3 text-sm text-slate-600 font-medium"
        >
          <h4 className="font-semibold text-slate-800">Quick Links</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={subtleFadeUp}
          className="flex flex-col items-center md:items-end gap-4"
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                <link.icon size={22} />
              </motion.a>
            ))}
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Rillah. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
