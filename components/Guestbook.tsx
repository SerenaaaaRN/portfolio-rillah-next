"use client";
import React, { useRef } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { useFormStatus } from "react-dom";
import { Send, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, ZoomInUp } from "@/lib/variants";

// Define the shape of a review
interface Review {
  id: number;
  created_at: string;
  name: string;
  message: string;
}

// Submit Button Component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          Submit Review <Send size={18} className="ml-2" />
        </>
      )}
    </Button>
  );
}

// Guestbook Component
export const Guestbook: React.FC<{
  initialReviews: Review[];
  addReview: (formData: FormData) => Promise<void>;
  error?: Error | null;
}> = ({ initialReviews, addReview, error }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="guestbook"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:true, amount: 0.1 }}
      className="scroll-mt-32"
    >
      <SectionTitle
        title="Guestbook"
        subtitle="Leave a message or a review of my portfolio"
      />

      <motion.div
        variants={StaggerContainer}
        className="max-w-4xl mx-auto"
      >
        <Card className="p-8">
          <form
            ref={formRef}
            action={async (formData) => {
              await addReview(formData);
              formRef.current?.reset();
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div variants={StaggerContainer} className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </motion.div>
            </div>
            <motion.div variants={StaggerContainer}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
                required
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              ></textarea>
            </motion.div>

            <motion.div variants={StaggerContainer} className="flex justify-end items-center">
              <SubmitButton />
            </motion.div>
          </form>
        </Card>

        <motion.div
          variants={StaggerContainer}
          className="mt-12"
        >
          <motion.h3 variants={StaggerContainer} className="text-2xl font-bold text-slate-900 text-center mb-8">
            Recent Reviews
          </motion.h3>
          {error ? (
            <p className="text-red-500 text-center col-span-full">
              Error loading reviews. Please try again later.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialReviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  variants={ZoomInUp}
                  custom={i}
                >
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 h-full bg-white rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-slate-500">
                          {review.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-slate-800">
                          {review.name}
                        </p>
                        <p className="text-slate-600 mt-1">{review.message}</p>
                        <p className="text-xs text-slate-400 mt-2">
                          {new Date(review.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
