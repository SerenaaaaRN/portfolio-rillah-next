"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, Code, Award, Maximize } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, subtleFadeUp, FadeIn, ZoomIn, ZoomInUp } from "@/lib/variants";

type TabType = "tech" | "certs";

const skills = [
    { name: "Python", logoSrc: "/logo/python.svg" },
    { name: "Numpy", logoSrc: "/logo/numpy.svg" },
    { name: "Pandas", logoSrc: "/logo/pandas.svg" },
    { name: "Sympy", logoSrc: "/logo/sympy.svg" },
    { name: "Java", logoSrc: "/logo/java.svg" },
    { name: "JavaScript", logoSrc: "/logo/javascript.svg" },
    { name: "Dart", logoSrc: "/logo/dart.svg" },
    { name: "Typescript", logoSrc: "/logo/typescript.svg" },
    { name: "TailwindCSS", logoSrc: "/logo/tailwindcss.svg" },
    { name: "C++", logoSrc: "/logo/c++.svg" },
    { name: "GitHub", logoSrc: "/logo/github.svg" },
    { name: "Notion", logoSrc: "/logo/notion.svg" },
];

const certificates = [
  {
    title: "Pelatihan Pemrograman",
    issuer: "Duhairillah",
    imageUrl: "/assets/Sertifikat Peserta Pelatihan Pemrograman_DUHAIRILLAH.png",
  },
  {
    title: "Soon",
    issuer: "",
    imageUrl: "",
  },
  {
    title: "Soon",
    issuer: "",
    imageUrl: "",
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tech");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    if (imageUrl) {
      setSelectedCert(imageUrl);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.section
      id="skills"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="scroll-mt-32"
    >
      <SectionTitle
        title="Skills & Certificates"
        subtitle="A showcase of my technical skills and professional certifications"
      />

      <motion.div
        variants={subtleFadeUp}
        className="flex justify-center mb-10"
      >
        <div className="flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-xl sm:rounded-full relative">
          <button
            onClick={() => setActiveTab("tech")}
            className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10"
          >
            <Code size={16} /> Tech Stack
          </button>
          <button
            onClick={() => setActiveTab("certs")}
            className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10"
          >
            <Award size={16} /> Certificates
          </button>
          
          <motion.div
            layoutId="skillTab"
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute h-full bg-white rounded-full shadow-md"
            style={{
              width: activeTab === 'tech' ? '140px' : '160px',
              left: activeTab === 'tech' ? '0%' : 'calc(100% - 160px)',
            }}
          />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={StaggerContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`grid ${activeTab === 'tech' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6`}
          >
            {activeTab === "tech"
              ? skills.map((skill, i) => (
                  <motion.div key={skill.name} variants={ZoomInUp} custom={i}>
                    <SkillCard name={skill.name} logoSrc={skill.logoSrc} />
                  </motion.div>
                ))
              : certificates.map((cert, i) => (
                  <motion.div key={i} variants={ZoomInUp} custom={i}>
                    <CertificateCard
                      title={cert.title}
                      issuer={cert.issuer}
                      imageUrl={cert.imageUrl}
                      onCardClick={() => openModal(cert.imageUrl)}
                    />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal imageUrl={selectedCert} onClose={closeModal} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

// -- Reusable Components --
interface SkillCardProps {
  name: string;
  logoSrc: string | StaticImageData;
}

const SkillCard = ({ name, logoSrc }: SkillCardProps) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
    transition={{ type: 'spring', stiffness: 300 }}
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

const CertificateCard = ({ title, issuer, imageUrl, onCardClick }: CertificateCardProps) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="bg-white rounded-2xl border border-slate-100 shadow-sm group overflow-hidden cursor-pointer h-full flex flex-col"
    onClick={onCardClick}
  >
    <div className="aspect-video relative overflow-hidden">
      {imageUrl ? (
        <>
          <Image
            src={imageUrl}
            alt="Certificate"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
          />
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
    <div className="p-4 flex-grow">
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500">{issuer}</p>
    </div>
  </motion.div>
);

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
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
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
