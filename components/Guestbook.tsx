"use client";
import React, { useRef } from "react";
import { SectionTitle, Button, Card } from "./ui/Primitives";
import { useFormStatus } from "react-dom";
import { Send, LoaderCircle } from "lucide-react";
import Animation from "./ui/Animation";

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
  addReviewAction: (formData: FormData) => Promise<void>;
}> = ({ initialReviews, addReviewAction }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="guestbook" className="scroll-mt-32">
      <Animation type="fadeIn">
        <SectionTitle
          title="Guestbook"
          subtitle="Leave a message or a review of my portfolio"
        />
      </Animation>

      <Animation type="slideUp" delay={200}>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <form
              ref={formRef}
              action={async (formData) => {
                await addReviewAction(formData);
                formRef.current?.reset();
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
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
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
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
              </div>

              <div className="flex justify-end items-center">
                <SubmitButton />
              </div>
            </form>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <h3 className="text-2xl font-bold text-slate-900 text-center col-span-full">
              Recent Reviews
            </h3>
            {initialReviews.map((review, index) => (
              <Animation type="slideUp" delay={index * 100} key={review.id}>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-slate-500">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-slate-800">{review.name}</p>
                      <p className="text-slate-600 mt-1">{review.message}</p>
                      <p className="text-xs text-slate-400 mt-2">
                        {new Date(review.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              </Animation>
            ))}
          </div>
        </div>
      </Animation>
    </section>
  );
};
