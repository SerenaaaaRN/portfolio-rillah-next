"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button, Badge } from "./ui/Primitives";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  StaggerContainer,
  FadeUp,
  FadeRight,
  subtleFadeUp,
  ZoomIn,
} from "@/lib/variants";

export const Hero: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Machine Learning Enthusiast",
        "Informatics Student",
        "Math Enthusiast",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.section
      id="home"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen flex items-center justify-center pt-20 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={StaggerContainer}
          className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            variants={subtleFadeUp}
            className="flex justify-center lg:justify-start"
          >
            <Badge variant="success" className="shadow-sm">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Student @Sriwijaya University
            </Badge>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              variants={subtleFadeUp}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Hi, I&apos;m Rillah <br />
              <span className="text-3xl md:text-4xl text-slate-500/90 h-[1.2em] inline-block">
                <span ref={el} />
              </span>
            </motion.h1>
            <motion.p
              variants={subtleFadeUp}
              className="text-lg md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A first-year Informatics student at Sriwijaya University. I am
              passionate about bridging the gap between Mathematical Logic and
              Software Engineering. Currently building my foundation in
              Algorithms and Data Science.
            </motion.p>
          </div>

          <motion.div
            variants={FadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowRight size={18} className="ml-2" />
            </Button>
            <a href="mailto:duhairillahred927@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group bg-white/80 backdrop-blur-sm"
              >
                Let&apos;s Connect{" "}
                <Mail
                  size={18}
                  className="ml-2 group-hover:translate-y-0.5 transition-transform"
                />
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={FadeRight}
            className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-slate-500"
          >
            <span className="text-sm font-medium">Follow me:</span>
            <a
              href="https://www.linkedin.com/in/duhairillah-690679281/"
              className="hover:text-slate-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/SerenaaaaRN"
              className="hover:text-slate-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/__rillah?igsh=MWhvN21haXljNjFmNQ=="
              className="hover:text-slate-900 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={ZoomIn}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[2.5rem] rotate-6 transform border border-white/50 shadow-lg"
            ></motion.div>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative w-full h-full"
            >
              <Image
                src="/assets/kucingHitam.jpg"
                alt="Rillah"
                fill
                className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
