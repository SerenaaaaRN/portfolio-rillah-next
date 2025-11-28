"use client";
import React from "react";
import { SectionTitle } from "./ui/Primitives";
import { MapPin, GraduationCap, Mail, User } from "lucide-react";
import Image from "next/image";
import { AOSProps } from "./ui/AOSProps";

export const About: React.FC<AOSProps> = ({ ...aosProps }) => {
  return (
    <section id="about" className="scroll-mt-32" {...aosProps}>
        <SectionTitle
          title="About Me"
          subtitle="Passionate about creating innovative solutions through data and algorithms"
          data-aos="fade-up"
          data-aos-duration="2000"
        />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 mt-5" data-aos="fade-right" data-aos-delay="500" data-aos-duration="2000">
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/rillahme.jpg"
              alt="Working"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div 
          className="lg:col-span-7 space-y-8 mt-5"
          data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
          <div className="prose prose-slate max-w-none text-slate-600" data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Hello There!
            </h3>
            <p className="leading-relaxed mb-4">
              Saya adalah mahasiswa tahun pertama Teknik Informatika di
              Universitas Sriwijaya yang berminat pada Kecerdasan Buatan.
              Perjalanan saya dimulai dengan rasa ingin tahu tentang bagaimana
              Matematika bisa diimplementasikan yang membawa saya untuk
              mendalami machine learning.
            </p>
            <p className="leading-relaxed mb-4">
              Saat ini, saya sedang fokus membangun fondasi kuat di bidang
              <span className="font-semibold">
                {" "}
                Software Engineering
              </span> dan{" "}
              <span className="font-semibold">Artificial Intelligence</span>.
              Saya percaya bahwa teknologi terbaik lahir dari pemahaman konsep
              dasar yang matang, bukan sekadar mengikuti tren.
            </p>
            <p className="leading-relaxed mb-4">
              Di luar jam kuliah, saya aktif mengeksplorasi matematika,
              algoritma pemrograman, dan algoritma Machine Learning dasar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard icon={User} label="Name" value="Rillah" />
              <InfoCard icon={MapPin} label="Location" value="Palembang" />
              <InfoCard
                icon={GraduationCap}
                label="Education"
                value="Teknik Informatika"
              />
              <InfoCard
                icon={Mail}
                label="Email"
                value="duhairillahred927@gmail.com"
              />
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-slate-900 mb-3">
                Interests & Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Software Engineer",
                  "Computational Math",
                  "Data Science",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-md border border-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-slate-900 p-2 rounded-lg text-white mr-4">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
        {label}
      </p>
      <p className="text-slate-900 font-semibold">{value}</p>
    </div>
  </div>
);
