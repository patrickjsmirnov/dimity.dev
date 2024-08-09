import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "flex flex-col items-center")}>
        <div className="md:max-w-[678px] fixed mt-4 w-full px-4 md:px-0">
          <div className="flex flex-wrap gap-6 bg-white py-6 px-8 rounded-[40px]">
            <Link href="/">🚀</Link>
            <a
              className="ml-auto"
              href="https://www.linkedin.com/in/dmitry-smirnov"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://github.com/patrickjsmirnov" target="_blank">
              Github
            </a>
            <Link href="/resume">Resume</Link>
          </div>
        </div>
        <div className="pt-[104px] px-4 pb-4">{children}</div>
        <footer className="py-12 mt-auto">
          © {new Date().getFullYear()} Dmitry Smirnov
        </footer>
      </body>
    </html>
  );
}
