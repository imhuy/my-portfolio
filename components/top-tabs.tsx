"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "home.jsx", path: "/", icon: "react_icon" },
  { name: "about.html", path: "/about", icon: "html_icon" },
  { name: "contact.css", path: "/contact", icon: "css_icon" },
  { name: "projects.js", path: "/projects", icon: "js_icon" },
  { name: "github.md", path: "/github", icon: "markdown_icon" },
];

export function TopTabs() {
  const pathname = usePathname();

  return (
    <div className='flex items-center h-9 bg-[#252526] border-b border-[#3C3C3C]'>
      <div className='flex px-4 gap-4  overflow-auto'>
        {tabs.map((tab) => {
          const isActive =
            (tab.path === "/" && pathname === "/") || (tab.path !== "/" && pathname.startsWith(tab.path));

          return (
            <Link
              key={tab.name}
              href={tab.path}
              className={`flex items-center gap-2 text-sm py-1 px-3 hover:text-white cursor-pointer transition-colors
                ${isActive ? "text-white font-bold border-t-amber-700 border-t bg-[#3a3a3b]" : "text-gray-400"}`}
            >
              <img className=' size-4' alt='home.jsx' src={`/icon/${tab.icon}.svg`}></img>
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
