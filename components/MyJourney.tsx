"use client";
import React, { useState } from "react";
import { GraduationCap, Calendar, Briefcase } from "lucide-react";
import { SectionTitle } from "./ui/Primitives"; 
import { AOSProps } from "./ui/AOSProps";

const academicData = [
  {
    role: "S1 Teknik Informatika",
    org: "Universitas Sriwijaya",
    date: "2025 - Sekarang",
    location: "Indralaya, Sumatra Selatan",
    desc: "Mahasiswa tingkat pertama dengan minat kuat pada Software Engineering dan Artificial Intelligence. Saat ini aktif membangun fondasi dalam algoritma pemrograman dan matematika komputasi.",
    tags: ["Algotitma Strukur Data", "Kalkulus", "Matriks dan Vektor"],
    aos: "fade-left",
  },
  {
    role: "MAN 1 Palembang",
    org: "",
    date: "2020 - 2023",
    location: "Palembang, Sumatra Selatan",
    desc: "Lulusan jurusan IPS (Ilmu Pengetahuan Sosial). Memiliki ketertarikan pada Matematika",
    tags: ["Matematika", "Informatika"],
    aos: "fade-right",
  },
  
];

const experienceData = [
  {
    role: "Volunteer Software Engineer",
    org: "HMIF",
    date: "2025",
    location: "Universitas Sriwijaya",
    desc: "Berkontribusi dalam menyempurnakan desain antarmuka (UI) di Figma, khususnya dalam integrasi aset visual dan penambahan komponen fitur pada prototipe aplikasi.",
    tags: [],
    aos: "fade-left",
  },
];

export const MyJourney: React.FC<AOSProps> = ({ ...aosProps }) => {
  const [activeTab, setActiveTab] = useState("academic");

  const data = activeTab === "academic" ? academicData : experienceData;

  return (
    <section id="myjourney" className="scroll-mt-32" {...aosProps}>
      <SectionTitle
        title="My Journey"
        subtitle="A timeline of my academic and professional milestones"
        data-aos="fade-right"
        data-aos-delay="500"
      />

      <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-xl sm:rounded-full relative">
            <button
              onClick={() => setActiveTab("academic")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "academic"
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <GraduationCap size={16} /> Academic
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Briefcase size={16} /> Experience
            </button>
          </div>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {data.map((item, index) => (
            <TimelineItem
              key={index}
              role={item.role}
              org={item.org}
              date={item.date}
              location={item.location}
              desc={item.desc}
              tags={item.tags}
              icon={activeTab === 'academic' ? <GraduationCap size={18} /> : <Briefcase size={18} />}
              data-aos={item.aos}
              data-aos-delay={(300 + index * 100).toString()}
            />
          ))}
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
  "data-aos"?: string;
  "data-aos-offset"?: string;
  "data-aos-duration"?: string;
  "data-aos-easing"?: string;
  "data-aos-delay"?: string;
  "data-aos-anchor"?: string;
  "data-aos-anchor-placement"?: string;
  "data-aos-once"?: string;
  "data-aos-mirror"?: string;
  "data-aos-waw"?: string;
  "data-aos-disable"?: string;
}

const TimelineItem = ({
  role,
  org,
  date,
  location,
  desc,
  tags,
  icon,
  ...aosProps
}: TimelineItemProps) => (
  <div
    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
    {...aosProps}
  >
    {/* Icon Dot */}
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
      {icon}
    </div>

    {/* Content Card */}
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
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
    </div>
  </div>
);
