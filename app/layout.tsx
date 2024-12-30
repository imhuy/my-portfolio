import { BottomTabs } from "@/components/bottom-tabs";
import { LeftTabs } from "@/components/left-tabs";
import { Sidebar } from "@/components/sidebar";
import { TopMenu } from "@/components/top-menu";
import { TopTabs } from "@/components/top-tabs";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lưu Văn Huy - Full Stack Developer",
  description: "Portfolio website of Huy Lưu, a  Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={spaceMono.className}>
        <div className='flex flex-col h-screen'>
          <TopMenu />
          <div className='flex flex-1 overflow-hidden relative'>
            {/* <MobileMenu /> */}
            <LeftTabs />
            <Sidebar />
            <main className='flex-1 overflow-auto w-full flex flex-col'>
              <TopTabs />
              {children}
              <BottomTabs />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
