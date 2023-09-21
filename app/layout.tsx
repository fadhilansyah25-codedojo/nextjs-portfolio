import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadil Ardiansyah | Personal Portfolio",
  description: "Muhammad Fadil Ardiansyah, Fullstack developer ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative h-[5000px] bg-gray-50
      pt-28 text-gray-950
      `}
      >
        {/* gradient backgroud effect */}
        <div
          className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] 
        rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="2xl:left[-5rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] 
        w-[50rem] rounded-full bg-[#dbd7fd] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem]
        "
        ></div>

        {/* header */}
        <Header />

        {/* Main Content */}
        {children}

        {/* footer */}
      </body>
    </html>
  );
}
