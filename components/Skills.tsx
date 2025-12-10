"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, Code, Award } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, FadeUp, FadeIn, ZoomIn } from "@/lib/variants";

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
    imageUrl: "", // Placeholder
  },
  {
    title: "Soon",
    issuer: "",
    imageUrl: "", // Placeholder
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tech");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl: string) => {
    if (imageUrl) {
      setSelectedCert(imageUrl);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
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
        variants={FadeUp}
        className="flex justify-center mb-10"
      >
        <div className="flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-xl sm:rounded-full relative">
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "tech"
                ? "bg-white text-slate-900 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Code size={16} /> Tech Stack
          </button>

          <button
            onClick={() => setActiveTab("certs")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "certs"
                ? "bg-white text-slate-900 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Award size={16} /> Certificates
          </button>
        </div>
      </motion.div>

      <motion.div
        key={activeTab}
        variants={StaggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        {activeTab === "tech" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={FadeUp}>
                <SkillCard name={skill.name} logoSrc={skill.logoSrc} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div key={i} variants={FadeUp}>
                <CertificateCard
                  title={cert.title}
                  issuer={cert.issuer}
                  imageUrl={cert.imageUrl}
                  onCardClick={() => openModal(cert.imageUrl)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && selectedCert && (
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
  <div className="flex flex-col gap-4 group bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 glass-effect h-full">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-slate-50/60 rounded-lg group-hover:bg-slate-200/80 group-hover:text-white transition-colors duration-300">
          <Image src={logoSrc} alt={name} width={35} height={35} />
        </div>
        <span className="font-bold text-slate-800">{name}</span>
      </div>
    </div>
  </div>
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
}: CertificateCardProps) => (
  <div
    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden cursor-pointer h-full"
    onClick={onCardClick}
  >
    <div className="aspect-4/3 relative">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Certificate"
          fill
          objectFit="contain"
          className="p-2"
        />
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
    <div className="p-4">
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500">{issuer}</p>
    </div>
  </div>
);

interface CertificateModalProps {
  imageUrl: string;
  onClose: () => void;
}

const CertificateModal = ({ imageUrl, onClose }: CertificateModalProps) => (
  <motion.div
    initial="hidden"
    animate="show"
    exit="hidden"
    variants={FadeIn}
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <button
      className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors z-10"
      onClick={onClose}
    >
      <X size={32} />
    </button>
    <motion.div
      variants={ZoomIn}
      className="relative w-full max-w-4xl h-full max-h-[80vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={imageUrl}
        alt="Certificate"
        fill
        objectFit="contain"
      />
    </motion.div>
  </motion.div>
);

export default Skills;
