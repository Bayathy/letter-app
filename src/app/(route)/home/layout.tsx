import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Letter App",
    openGraph: {
      title: "Letter App",
      description: "description",
      url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/home"
          : "https://letter-app-pi.vercel.app/home",
      siteName: "Letter App",
      images: [
        "https://2.bp.blogspot.com/-R2JBGJI7pDE/UOFKIQ9qwmI/AAAAAAAAKEQ/hg2dXiYebqk/w1200-h630-p-k-no-nu/bunbougu_memo.png",
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
