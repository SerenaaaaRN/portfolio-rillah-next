import React from "react";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { MainContent } from "./MainContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rillah | Machine Learning Engineer",
  description: "Portfolio of Rillah",
};

// ========= SERVER ACTION ========= //
async function addReview(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !message?.trim()) return;

  await supabase.from("reviews").insert([{ name, message }]);
  revalidatePath("/");
}

// ========= MAIN PAGE ========= //
const App = async () => {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error("Error fetching reviews:", error);

  return <MainContent reviews={reviews || []} addReview={addReview} error={error} />;
};

export default App;
