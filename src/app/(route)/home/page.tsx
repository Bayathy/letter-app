"use client";
import { Editor } from "@/app/components/editor";
import { Preview } from "@/app/components/preview";

export default function Home() {
  return (
    <main className="mt-4 flex flex-col gap-4">
      <Preview />
      <Editor />
    </main>
  );
}
