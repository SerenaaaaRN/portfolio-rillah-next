"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button, Badge } from "./ui/Primitives";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  FadeDownRight,
  FadeRight,
  FadeUp,
  ZoomInLeft,
  slowTransition,
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
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative"
    >
      <motion.div
        variants={FadeDownRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={slowTransition}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            variants={FadeDownRight}
            className="flex justify-center lg:justify-start"
          >
            <Badge variant="success" className="animate-fade-in-up shadow-sm">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Student @Sriwijaya University
            </Badge>
          </motion.div>

          <div className="space-y-4">

            <motion.h1 
              variants={FadeDownRight}
              transition={slowTransition}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I&apos;m Rillah <br />
              <span className="text-3xl md:text-4xl text-slate-500/90 h-[1.2em] inline-block">
                <span ref={el} />
              </span>
            </motion.h1>
            <p className="text-lg md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A first-year Informatics student at Sriwijaya University. I am
              passionate about bridging the gap between Mathematical Logic and
              Software Engineering. Currently building my foundation in
              Algorithms and Data Science.
            </p>
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
        </div>

        {/* Hero Image */}
        <motion.div
          variants={ZoomInLeft}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[2.5rem] rotate-6 transform transition-transform hover:rotate-3 duration-500 border border-white/50 shadow-lg"></div>
            <Image
              src="/assets/kucingHitam.jpg"
              alt="Rillah"
              fill
              className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white transform transition-transform hover:-translate-y-2 duration-500"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
