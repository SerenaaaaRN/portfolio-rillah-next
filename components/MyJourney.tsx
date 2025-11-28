"use client";
import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { SectionTitle } from "./ui/Primitives"; // Assuming SectionTitle is imported if used
import { AOSProps } from "./ui/AOSProps";

export const MyJourney: React.FC<AOSProps> = ({ ...aosProps }) => {
  return (
    <section id="myjourney" className="scroll-mt-32" {...aosProps}>
      <SectionTitle
        title="My Journey"
        subtitle="A timeline of my academic and personal milestones"
        data-aos="fade-right"
        data-aos-delay="500"
      />

      <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
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
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <TimelineItem
            role="MAN 1 Palembang"
            org=""
            date="2020 - 2023"
            location="Palembang, Sumatra Selatan"
            desc="Lulusan jurusan IPS (Ilmu Pengetahuan Sosial). Memiliki ketertarikan pada Matematika"
            tags={["Matematika", "Informatika"]}
            data-aos="fade-left"
            data-aos-delay="400"
          />
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
  ...aosProps
}: TimelineItemProps) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" {...aosProps}>
    {/* Icon Dot */}
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
      <GraduationCap size={18} />
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
