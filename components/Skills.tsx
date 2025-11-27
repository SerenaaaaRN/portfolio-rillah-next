/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import { SectionTitle, Card } from './ui/Primitives';
import { Cpu, Terminal, Smartphone, Braces, Sigma, Table2, BookOpen, GitBranch } from 'lucide-react';
import Animation from "./ui/Animation";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const categories = [
    'Languages',
    'Libraries',
    'Tools & Cloud'
  ];

  const skillsData: Record<string, Array<{ name: string; level: number; icon: any }>> = {
    'Languages': [
      { name: 'Python', level: 70, icon: Terminal },
      { name: 'Java', level: 75, icon: Terminal },
      { name: 'JavaScript', level: 60, icon: Braces },
      { name: 'Dart', level: 30, icon: Smartphone},
      { name: 'C++', level: 40, icon: Cpu}
    ],
    'Libraries': [
      { name: 'Numpy', level: 45, icon: Sigma },
      { name: 'Pandas', level: 30, icon: Table2 },
      // { name: 'React', level: 95, icon: Atom },
      // { name: 'Tailwind CSS', level: 98, icon: Wind },
    ],
    'Tools & Cloud': [
      { name: 'GitHub', level: 50, icon: GitBranch },
      { name: 'Notion', level: 85, icon: BookOpen },
    ]
  };

  return (
    <section id="skills" className="scroll-mt-32">
      <SectionTitle
        title="Technical Skills"
        subtitle="My technical proficiency in the world of Data Science"
      />

      <Animation type="slideUp">
        <div className="flex flex-col items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 bg-slate-100/50 p-2 rounded-2xl w-full max-w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "text-slate-500 hover:bg-slate-200 hover:text-slate-800"
                }
              `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {skillsData[activeCategory].map((skill) => (
              <Card key={skill.name} className="flex flex-col gap-4 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                      <skill.icon size={20} />
                    </div>
                    <span className="font-bold text-slate-800">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono text-xs">
                    {skill.level}%
                  </span>
                </div>

                {/* Custom Progress Bar */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-900 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Animation>
    </section>
  );
};