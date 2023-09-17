import dynamic from "next/dynamic";

export const Editor = dynamic(
  () => import("../../components/editor/editor").then((m) => m.Editor),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);
