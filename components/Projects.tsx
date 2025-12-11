"use client";
import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Github, ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerContainer, ZoomInUp } from "@/lib/variants";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Kalkulator Penyelesaian Persamaan Diferensial Kalkulus",
      desc: "Menggunakan algoritma Python untuk menampilkan langkah penyelesaian. Dibuat sebagai Final Project mata kuliah Kalkulus.",
      tags: [
        "ReactJS",
        "TailwindCSS",
        "Python",
        "Sympy",
        "Numpy",
        "Matplotlib",
      ],
      image: "/assets/Project1.png",
      link: "https://kalkulusproject.vercel.app/",
      github: "https://github.com/SerenaaaaRN/kalkulus-project-1",
    },
  ];

  return (
    <motion.section
      id="projects"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="scroll-mt-32"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="Some of the key projects I've worked on recently"
      />

      <motion.div
        variants={StaggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={ZoomInUp}
            custom={idx}
            className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="p-2 bg-white/90 backdrop-blur rounded-full shadow-sm text-slate-900">
                    <Folder size={16} />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <a href={project.github} className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      <Github size={14} className="mr-2" /> Code
                    </Button>
                  </a>
                  <a href={project.link} className="flex-1">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Live Demo <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={StaggerContainer}
        className="text-center mt-12"
      >
        <Button variant="ghost" className="text-slate-500 hover:text-slate-900 transition-colors">
          View all projects on GitHub
        </Button>
      </motion.div>
    </motion.section>
  );
};
