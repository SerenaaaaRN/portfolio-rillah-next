/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

type TabType = "work" | "education";

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  return (
    <section id="experience" className="scroll-mt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
          My Experience
        </h2>
        <p className="text-lg text-slate-500">
          A journey through my professional growth and academic achievements
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-xl sm:rounded-full relative">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "bg-white text-slate-900 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <GraduationCap size={16} /> Education
          </button>

          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "work"
                ? "bg-white text-slate-900 shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Briefcase size={16} /> Work Experience
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {activeTab === "work" ? (
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {/* <TimelineItem
              role="Machine Learning Engineer Intern"
              org="Google"
              date="June 2024 - Present"
              location="Mountain View, CA"
              desc="Optimized large language model inference pipelines using TensorRT, reducing latency by 40%. Collaborated with the Research team to implement new attention mechanisms."
              tags={["Python", "TensorFlow", "C++", "TPU"]}
            />
            <TimelineItem
              role="Data Science Research Assistant"
              org="Stanford AI Lab"
              date="Jan 2023 - May 2024"
              location="Stanford, CA"
              desc="Conducted research on self-supervised learning for computer vision. Published a paper at CVPR 2024 on contrastive learning efficiency."
              tags={["PyTorch", "Vision Transformers", "LaTeX"]}
            />
            <TimelineItem
              role="Junior Backend Developer"
              org="TechCorp Startups"
              date="June 2022 - Dec 2022"
              location="Remote"
              desc="Built RESTful APIs for data ingestion. Migrated legacy data pipelines to Apache Airflow."
              tags={["Python", "Django", "PostgreSQL", "AWS"]}
            /> */}
          </div>
        ) : (
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            <TimelineItem
              role="S1 Teknik Informatika"
              org="Universitas Sriwijaya"
              date="2025 - Sekarang"
              location="Indralaya, Sumatra Selatan"
              desc="Mahasiswa tingkat pertama dengan minat kuat pada Software Engineering dan Artificial Intelligence. Saat ini aktif membangun fondasi dalam algoritma pemrograman dan matematika komputasi."
              tags={[
                "Algotitma Strukur Data",
                "Kalkulus",
                "Matriks dan Vektor",
              ]}
            />
            <TimelineItem
              role="MAN 1 Palembang"
              org=""
              date="2020 - 2023"
              location="Palembang, Sumatra Selatan"
              desc="Lulusan jurusan IPS (Ilmu Pengetahuan Sosial). Memiliki ketertarikan pada Matematika"
              tags={["Matematika", "Informatika"]}
            />
          </div>
        )}
      </div>
    </section>
  );
};

const TimelineItem = ({ role, org, date, location, desc, tags }: any) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    {/* Icon Dot */}
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
      <Briefcase size={18} />
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
