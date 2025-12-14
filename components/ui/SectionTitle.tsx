"use client";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/variants";

export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <motion.div
    variants={FadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mb-10 text-center"
  >
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);