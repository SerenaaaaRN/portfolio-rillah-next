"use client";
import React, { useState } from "react";
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
} from "lucide-react";
import Animation from "./ui/Animation";
import { SectionTitle } from "./ui/Primitives";

type TabType = "tech" | "certs";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tech");

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
              {Array.from({ length: 6 }).map((_, i) => (
                <CertificateCard key={i} />
              ))}
            </div>
          )}
        </div>
      </Animation>
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

const CertificateCard = () => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 aspect-[4/3] flex items-center justify-center">
    <div className="text-center text-slate-400">
      <Award size={40} className="mx-auto mb-2" />
      <p className="font-medium">Certificate</p>
      <p className="text-xs">Placeholder</p>
    </div>
  </div>
);

export default Skills;
