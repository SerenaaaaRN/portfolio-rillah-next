"use client";
import React from 'react';
import { SectionTitle, Button } from './ui/Primitives';
import { Send, Mail, MapPin, GitBranchIcon } from 'lucide-react';
import Animation from "./ui/Animation";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-32">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss research opportunities?"
      />

      <Animation type="slideUp">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-soft p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-slate-900">
              Let&apos;s Work Together
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
              I&apos;m currently focused on my studies but open to discussing
              collaborations, student projects, or just having a chat about AI
              and Technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactCard
              icon={Mail}
              title="Email"
              value="duhairillahred927@gmail.com"
              action="mailto:duhairillahred927@gmail.com"
              actionLabel="Send Email"
            />
            <ContactCard
              icon={GitBranchIcon}
              title="GitHub"
              value="SerenaaaaRN"
              action="https://github.com/SerenaaaaRN"
              actionLabel="Visit"
            />
            <ContactCard icon={MapPin} title="Location" value="Palembang" />
          </div>

          <div className="mt-12 text-center">
            <a href="mailto:duhairillahred927@gmail.com">
              <Button size="lg" className="px-8">
                Say Hello <Send size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </Animation>
    </section>
  );
};

interface ContactCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ElementType;
  title: string;
  value: string;
  action?: string;
  actionLabel?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, action, actionLabel }) => (
  <div className="flex flex-col items-center p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-300 group">
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-slate-900 shadow-sm mb-4 group-hover:scale-110 transition-transform">
      <Icon size={22} />
    </div>
    <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
    <p className="text-slate-500 text-sm mb-4">{value}</p>
    
    {action && (
      <a href={action} className="text-xs font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-0.5 mt-auto">
        {actionLabel}
      </a>
    )}
  </div>
);