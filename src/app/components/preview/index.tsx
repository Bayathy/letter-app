import dynamic from "next/dynamic";

export const Preview = dynamic(
  () => import("./preview").then((m) => m.Preview),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  },
);
