"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Code,
  Award,
  Cpu,
  Terminal,
  Smartphone,
  Braces,
  Sigma,
  Table2,
  BookOpen,
  GitBranch,
  X,
} from "lucide-react";
import Animation from "./ui/Animation";
import { SectionTitle } from "./ui/Primitives";

type TabType = "tech" | "certs";

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

  const skills = [
    { name: "Python", level: 70, icon: Terminal },
    { name: "Java", level: 75, icon: Terminal },
    { name: "JavaScript", level: 60, icon: Braces },
    { name: "Dart", level: 30, icon: Smartphone },
    { name: "C++", level: 40, icon: Cpu },
    { name: "Numpy", level: 45, icon: Sigma },
    { name: "Pandas", level: 30, icon: Table2 },
    { name: "GitHub", level: 50, icon: GitBranch },
    { name: "Notion", level: 85, icon: BookOpen },
  ];

  const certificates = [
    {
      title: "Pelatihan Pemrograman",
      issuer: "Duhairillah",
      imageUrl: "/Sertifikat Peserta Pelatihan Pemrograman_DUHAIRILLAH.png",
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

  return (
    <section id="skills" className="scroll-mt-32">
      <SectionTitle
        title="Skills & Certificates"
        subtitle="A showcase of my technical skills and professional certifications"
      />

      <div className="flex justify-center mb-10">
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
      </div>

      <Animation type="slideUp">
        <div className="max-w-4xl mx-auto">
          {activeTab === "tech" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, i) => (
                <CertificateCard
                  key={i}
                  title={cert.title}
                  issuer={cert.issuer}
                  imageUrl={cert.imageUrl}
                  onCardClick={() => openModal(cert.imageUrl)}
                />
              ))}
            </div>
          )}
        </div>
      </Animation>

      {isModalOpen && selectedCert && (
        <CertificateModal imageUrl={selectedCert} onClose={closeModal} />
      )}
    </section>
  );
};

// -- Reusable Components --

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ElementType;
}

const SkillCard = ({ name, level, icon: Icon }: SkillCardProps) => (
  <div className="flex flex-col gap-4 group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
          <Icon size={20} />
        </div>
        <span className="font-bold text-slate-800">{name}</span>
      </div>
      <span className="text-slate-400 font-mono text-xs">{level}%</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-slate-900 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

interface CertificateCardProps {
  title: string;
  issuer: string;
  imageUrl: string;
  onCardClick: () => void;
}

const CertificateCard = ({ title, issuer, imageUrl, onCardClick }: CertificateCardProps) => (
  <div
    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden cursor-pointer"
    onClick={onCardClick}
  >
    <div className="aspect-[4/3] relative">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Certificate"
          layout="fill"
          objectFit="contain"
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
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <button
      className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
      onClick={onClose}
    >
      <X size={32} />
    </button>
    <div
      className="relative w-full max-w-4xl h-full max-h-[80vh]"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
    >
      <Image
        src={imageUrl}
        alt="Certificate"
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);

export default Skills;
