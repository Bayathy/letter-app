"use client";
import { Editor } from "@/app/components/editor";
import { Preview } from "@/app/components/preview";

export default function Home() {
  return (
    <main>
      <Preview />
      <Editor />
    </main>
  );
}
