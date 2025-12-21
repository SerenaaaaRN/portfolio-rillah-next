"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, Code, Award, Maximize } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer } from "@/lib/variants";

type TabType = "tech" | "certs";

interface Skill {
  id: string;
  name: string;
  logoSrc: string;
}

interface SkillCategory {
  title: string;
  description?: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning & Data Science",
    description: "Core expertise in ML and data analysis",
    skills: [
      { id: "python", name: "Python", logoSrc: "/logo/python.svg" },
      { id: "numpy", name: "Numpy", logoSrc: "/logo/numpy.svg" },
      { id: "pandas", name: "Pandas", logoSrc: "/logo/pandas.svg" },
      { id: "matplotlib", name: "Matplotlib", logoSrc: "/logo/matplotlib.svg" },
      { id: "seaborn", name: "Seaborn", logoSrc: "/logo/seaborn.svg" },
      { id: "sympy", name: "Sympy", logoSrc: "/logo/sympy.svg" },
      // { id: "scikit", name: "Scikit Learn", logoSrc: "/logo/scikit.svg" },
      // { id: "pytorch", name: "PyTorch", logoSrc: "/logo/pytorch.svg" },
      // { id: "tensor", name: "Tensor Flow", logoSrc: "/logo/tensorflow.svg" },
    ],
  },
  {
    title: "Software Development",
    description: "Full-stack development capabilities",
    skills: [
      { id: "java", name: "Java", logoSrc: "/logo/java.svg" },
      // { id: "kotlin", name: "Kotlin", logoSrc: "/logo/kotlin.svg"},
      { id: "javascript", name: "Javascript", logoSrc: "/logo/javascript.svg" },
      { id: "typescript", name: "Typescript", logoSrc: "/logo/typescript.svg" },
      { id: "reactjs", name: "React JS", logoSrc: "/logo/reactjs.svg" },
      { id: "tailwindcss", name: "Tailwind CSS", logoSrc: "/logo/tailwindcss.svg" },
      { id: "dart", name: "Dart", logoSrc: "/logo/dart.svg" },
      { id: "c++", name: "C++", logoSrc: "/logo/c++.svg" },
    ],
  },
  {
    title: "Tools & Others",
    description: "Development tools and productivity",
    skills: [
      { id: "github", name: "GitHub", logoSrc: "/logo/github.svg" },
      { id: "notion", name: "Notion", logoSrc: "/logo/notion.svg" },
    ],
  },
];

const certificates = [
  {
    id: "cert1",
    title: "Pelatihan Pemrograman",
    issuer: "HMIF Unsri",
    imageUrl:
      "/assets/Sertifikat Peserta Pelatihan Pemrograman_DUHAIRILLAH.png",
  },
  {
    id: "cert2",
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    imageUrl: "/assets/sertifikat_course_ai_dasar.png",
  },
  {
    id: "cert3",
    title: "Soon",
    issuer: "",
    imageUrl: "",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const categoryVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tech");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    if (imageUrl) {
      setSelectedCert(imageUrl);
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section id="skills" className="scroll-mt-32">
      <SectionTitle
        title="Skills & Certificates"
        subtitle="A showcase of my technical skills and professional certifications"
      />

      <div className="flex justify-center mb-8">
        <div
          role="tablist"
          className="flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-xl sm:rounded-full relative"
        >
          <button
            onClick={() => setActiveTab("tech")}
            className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10"
            role="tab"
            aria-selected={activeTab === "tech"}
          >
            {activeTab === "tech" && (
              <motion.div
                layoutId="activeSkillTab"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute inset-0 bg-white rounded-full shadow-md"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Code size={16} /> Tech Stack
            </span>
          </button>
          <button
            onClick={() => setActiveTab("certs")}
            className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10"
            role="tab"
            aria-selected={activeTab === "certs"}
          >
            {activeTab === "certs" && (
              <motion.div
                layoutId="activeSkillTab"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute inset-0 bg-white rounded-full shadow-md"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Award size={16} /> Certificates
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === "tech" ? (
            <motion.div
              key="tech"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={categoryVariants}
              className="space-y-6"
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-800">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-sm text-slate-500">
                        {category.description}
                      </p>
                    )}
                  </div>
                  <motion.div
                    variants={StaggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill.id} variants={itemVariants}>
                        <SkillCard name={skill.name} logoSrc={skill.logoSrc} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certs"
              variants={StaggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert) => (
                <motion.div key={cert.id} variants={itemVariants}>
                  <CertificateCard
                    title={cert.title}
                    issuer={cert.issuer}
                    imageUrl={cert.imageUrl}
                    onCardClick={() => openModal(cert.imageUrl)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal imageUrl={selectedCert} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

interface SkillCardProps {
  name: string;
  logoSrc: string | StaticImageData;
}

const SkillCard = ({ name, logoSrc }: SkillCardProps) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer h-full"
  >
    <div className="p-2 bg-slate-50/60 rounded-lg">
      <Image src={logoSrc} alt={name} width={32} height={32} />
    </div>
    <span className="font-bold text-slate-800 text-sm">{name}</span>
  </motion.div>
);

interface CertificateCardProps {
  title: string;
  issuer: string;
  imageUrl: string | StaticImageData;
  onCardClick: () => void;
}

const CertificateCard = ({
  title,
  issuer,
  imageUrl,
  onCardClick,
}: CertificateCardProps) => {
  const hasImage = !!imageUrl;

  return (
    <motion.div
      whileHover={
        hasImage ? { y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" } : {}
      }
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-white rounded-2xl border border-slate-100 shadow-sm group overflow-hidden h-full flex flex-col ${
        hasImage ? "cursor-pointer" : "cursor-default"
      }`}
      onClick={hasImage ? onCardClick : undefined}
    >
      <div className="aspect-video relative overflow-hidden">
        {hasImage ? (
          <>
            <motion.div layoutId={imageUrl as string} className="w-full h-full">
              <Image
                src={imageUrl}
                alt="Certificate"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize size={32} className="text-white" />
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-slate-50 flex items-center justify-center">
            <div className="text-center text-slate-400">
              <Award size={40} className="mx-auto mb-2" />
              <p className="font-medium">Certificate</p>
              <p className="text-xs">Placeholder</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 grow">
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{issuer}</p>
      </div>
    </motion.div>
  );
};

interface CertificateModalProps {
  imageUrl: string;
  onClose: () => void;
}

const CertificateModal = ({ imageUrl, onClose }: CertificateModalProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-20 bg-black/50 rounded-full p-2"
      onClick={onClose}
    >
      <X size={24} />
    </motion.button>
    <motion.div
      layoutId={imageUrl}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative w-full max-w-4xl h-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={imageUrl}
        alt="Certificate"
        width={1920}
        height={1080}
        className="w-full h-full object-contain rounded-lg shadow-2xl"
      />
    </motion.div>
  </motion.div>
);
