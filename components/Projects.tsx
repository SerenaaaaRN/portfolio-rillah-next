"use client";
import React from "react";
import { SectionTitle, Badge, Button } from "./ui/Primitives";
import { Github, ExternalLink, Folder } from "lucide-react";
import Animation from "./ui/Animation";
import Image from "next/image";

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
      image: "/Project1.png",
      link: "https://kalkulusproject.vercel.app/",
      github: "https://github.com/SerenaaaaRN/kalkulus-project-1",
    },
    // {
    //   title: "Medical Image Segmentation",
    //   desc: "U-Net architecture implementation for detecting tumors in MRI scans with 98% accuracy on test data.",
    //   tags: ["TensorFlow", "Computer Vision", "Healthcare AI"],
    //   image: "https://picsum.photos/600/400?random=11",
    //   link: "#",
    //   github: "#"
    // },
    // {
    //   title: "Real-time Stock Predictor",
    //   desc: "LSTM-based time series forecasting tool deployed as a microservice to predict S&P 500 trends.",
    //   tags: ["Time Series", "Flask", "Docker", "Scikit-Learn"],
    //   image: "https://picsum.photos/600/400?random=12",
    //   link: "#",
    //   github: "#"
    // }
  ];

  return (
    <section id="projects" className="scroll-mt-32">
      <Animation type="fadeIn">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of the key projects I've worked on recently"
        />
      </Animation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Animation type="slideUp" delay={idx * 100} key={project.title}>
            <div className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
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
                      className="text-[10px]"
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
            </div>
          </Animation>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="ghost" className="text-slate-500">
          View all projects on GitHub
        </Button>
      </div>
    </section>
  );
};
