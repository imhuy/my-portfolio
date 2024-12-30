"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    setText(""); // Reset text
    let index = 0;

    const typeEffect = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index)); // Cắt chuỗi từ đầu đến vị trí index
        index++;
        setTimeout(typeEffect, 100); // Lặp lại sau 100ms
      }
    };

    typeEffect(); // Bắt đầu hiệu ứng
  }, []);
  return (
    <div className='h-full bg-[#1E1E1E]   relative overflow-hidden'>
      {/* Background text */}

      {/* Main content */}
      <div className='container mx-auto px-4 justify-center sm:px-12 pt-16 sm:pt-32'>
        <div className='max-w-3xl bg'>
          <h1 className='text-4xl sm:text-6xl  font-mono font-bold   sm:text-left text-center text-white mb-2 sm:mb-4'>
            Lưu Văn Huy
          </h1>
          <h2 className='text-xl sm:text-2xl sm:text-left text-center font-mono text-gray-400 mb-6 sm:mb-8'>{text}</h2>
          <div className='flex flex-col sm:flex-row gap-3  sm:gap-4'>
            <Link
              href='/projects'
              className='w-full sm:w-auto text-center inline-block px-6 py-3 bg-[#FF9A8B] text-white rounded hover:bg-opacity-90 transition-colors'
            >
              View Work
            </Link>
            <Link
              href='/contact'
              className='w-full sm:w-auto text-center inline-block px-6 py-3 border border-[#FF9A8B] text-[#FF9A8B] rounded hover:bg-[#FF9A8B] hover:bg-opacity-10 transition-colors'
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
