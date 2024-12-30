"use client";
import { FolderClosed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "home.jsx", path: "/", icon: "react_icon" },
  { name: "about.html", path: "/about", icon: "html_icon" },
  { name: "contact.css", path: "/contact", icon: "css_icon" },
  { name: "projects.js", path: "/projects", icon: "js_icon" },
  { name: "github.md", path: "/github", icon: "markdown_icon" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className='hidden md:w-64 md:flex bg-[#252526] flex-col'>
      {/* Explorer Header */}
      <div className='p-4 text-gray-400 font-medium'>EXPLORER</div>

      {/* Portfolio Section */}
      <div className='p-2'>
        <div className='flex items-center gap-2 text-gray-400 mb-2'>
          <FolderClosed size={16} />
          <span>PORTFOLIO</span>
        </div>

        <div className='pl-4 space-y-2'>
          {tabs.map((tab) => {
            const isActive =
              (tab.path === "/" && pathname === "/") || (tab.path !== "/" && pathname.startsWith(tab.path));

            return (
              <Link
                key={tab.name}
                href={tab.path}
                className={`flex items-center gap-2 text-sm py-1 px-3 hover:text-white cursor-pointer transition-colors
                ${isActive ? "text-white font-bold   bg-[#3a3a3b]" : "text-gray-400"}`}
              >
                <img className=' size-4' alt='home.jsx' src={`/icon/${tab.icon}.svg`}></img>
                <span>{tab.name}</span>
              </Link>
            );
          })}
          {/* <Link href='/' className='flex items-center gap-2 text-gray-400 hover:text-white'>
            <img className=' size-4' alt='home.jsx' src='/icon/react_icon.svg'></img>
            <span>home.tsx</span>
          </Link>

          <Link href='/about' className='flex items-center gap-2 text-gray-400 hover:text-white'>
            <img className=' size-4' alt='home.jsx' src='/icon/html_icon.svg'></img>
            <span>about.html</span>
          </Link>

          <Link href='/contact' className='flex items-center gap-2 text-gray-400 hover:text-white'>
            <img className=' size-4' alt='home.jsx' src='/icon/css_icon.svg'></img>
            <span>contact.css</span>
          </Link>

          <Link href='/projects' className='flex items-center gap-2 text-gray-400 hover:text-white'>
            <img className=' size-4' alt='home.jsx' src='/icon/js_icon.svg'></img>
            <span>projects.js</span>
          </Link>

          <Link href='/github' className='flex items-center gap-2 text-gray-400 hover:text-white'>
            <img className=' size-4' alt='home.jsx' src='/icon/markdown_icon.svg'></img>
            <span>github.md</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
