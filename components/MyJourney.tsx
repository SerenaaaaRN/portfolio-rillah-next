"use client";
import React, { useState } from "react";
import { GraduationCap, Calendar, Briefcase } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { StaggerContainer, FadeRight, FadeLeft } from "@/lib/variants";

const academicData = [
  {
    id: "edu1",
    role: "S1 Teknik Informatika",
    org: "Universitas Sriwijaya",
    date: "2025 - Sekarang",
    location: "Indralaya, Sumatra Selatan",
    desc: "Mahasiswa tingkat pertama dengan minat kuat pada Software Engineering dan Artificial Intelligence. Saat ini aktif membangun fondasi dalam algoritma pemrograman dan matematika komputasi.",
    tags: ["Algoritma Struktur Data", "Kalkulus", "Matriks dan Vektor"],
  },
  {
    id: "edu2",
    role: "MAN 1 Palembang",
    org: "",
    date: "2022 - 2025",
    location: "Palembang, Sumatra Selatan",
    desc: "Lulusan jurusan IPA (Ilmu Pengetahuan Alam). Memiliki ketertarikan pada Matematika",
    tags: ["Matematika", "Informatika"],
  },
];

const experienceData = [
  {
    id: "exp1",
    role: "Volunteer Software Engineer",
    org: "HMIF",
    date: "2025",
    location: "Universitas Sriwijaya",
    desc: "Berkontribusi dalam menyempurnakan desain antarmuka (UI) di Figma, khususnya dalam integrasi aset visual dan penambahan komponen fitur pada prototipe aplikasi.",
    tags: [],
  },
];

export const MyJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const data = activeTab === "academic" ? academicData : experienceData;

  return (
    <section id="myjourney" className="scroll-mt-32">
      <SectionTitle
        title="My Journey"
        subtitle="A timeline of my academic and professional milestones"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            className="flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-xl sm:rounded-full relative"
          >
            <button
              onClick={() => setActiveTab("academic")}
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10"
              role="tab"
              aria-selected={activeTab === "academic"}
            >
              {activeTab === "academic" && (
                <motion.div
                  layoutId="activeJourneyTab"
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-0 bg-white rounded-full shadow-md"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap size={16} /> Academic
              </span>
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10"
              role="tab"
              aria-selected={activeTab === "experience"}
            >
              {activeTab === "experience" && (
                <motion.div
                  layoutId="activeJourneyTab"
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-0 bg-white rounded-full shadow-md"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase size={16} /> Experience
              </span>
            </button>
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={StaggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              exit="hidden"
              className="space-y-8"
            >
              {data.map((item, index) => {
                const isEven = index % 2 === 0;
                const animVariant = isEven ? FadeLeft : FadeRight;

                return (
                  <TimelineItem
                    key={item.id}
                    role={item.role}
                    org={item.org}
                    date={item.date}
                    location={item.location}
                    desc={item.desc}
                    tags={item.tags}
                    icon={
                      activeTab === "academic" ? (
                        <GraduationCap size={18} />
                      ) : (
                        <Briefcase size={18} />
                      )
                    }
                    variant={animVariant}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  role: string;
  org: string;
  date: string;
  location: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  variant: Variants;
}

const TimelineItem = ({
  role,
  org,
  date,
  location,
  desc,
  tags,
  icon,
  variant,
}: TimelineItemProps) => (
  <motion.div
    variants={variant}
    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
  >
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-500 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
      {icon}
    </div>

    <motion.div
      whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3 className="font-bold text-slate-900 text-lg">{role}</h3>
          <h4 className="text-slate-600 font-medium">{org}</h4>
        </div>
        <div className="text-right mt-1 sm:mt-0">
          <div className="flex items-center text-xs text-slate-500 gap-1 sm:justify-end">
            <Calendar size={12} /> {date}
          </div>
          <div className="text-xs text-slate-400 mt-0.5">{location}</div>
        </div>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-slate-50 text-slate-600 text-xs font-medium rounded border border-slate-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);
