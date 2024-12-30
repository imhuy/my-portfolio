"use client";

import axios from "axios";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submit, isSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const CHAT_ID = -1002012748441;
    const URL = "https://api.telegram.org/bot7106691536:AAH5TmAmmsZ4eLV385Yhrp27QrWJWTt4B2s/sendMessage";
    await axios.post(URL, {
      chat_id: CHAT_ID,
      text: `${JSON.stringify(formData)}`,
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    isSubmit(true);
  };

  return (
    <div className='h-full bg-[#1E1E1E] relative overflow-hidden overflow-y-auto p-4 sm:p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8'>
        {/* Social Links */}
        <div className='font-mono'>
          <h2 className='text-xl sm:text-2xl text-white mb-4 sm:mb-6'>Reach Out Via Socials</h2>
          <div className='text-[#FF9A8B] space-y-4'>
            <pre className='text-gray-400'>
              {`.socials {
  email: huylv.tk@gmail.com;
  github: imhuy;
  linkedin: imhuy;
  facebook:iem.huy;
}`}
            </pre>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className='text-xl sm:text-2xl text-white mb-4 sm:mb-6'>Or Fill Out This Form</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='NAME'
                className='bg-[#252526] border border-gray-800 rounded p-2 text-white'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type='email'
                placeholder='EMAIL'
                className='bg-[#252526] border border-gray-800 rounded p-2 text-white'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <input
              type='text'
              placeholder='SUBJECT'
              className='w-full bg-[#252526] border border-gray-800 rounded p-2 text-white'
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <textarea
              placeholder='MESSAGE'
              rows={6}
              className='w-full bg-[#252526] border border-gray-800 rounded p-2 text-white'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type='submit' className='bg-[#FF9A8B] text-white px-6 py-2 rounded hover:bg-opacity-90'>
              {!submit ? "SUBMIT" : "SUBMITED"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
