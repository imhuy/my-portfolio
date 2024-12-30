import { Globe, Rocket } from "lucide-react";

export default function SettingPage() {
  return (
    <div className='h-full bg-[#1E1E1E] relative overflow-hidden overflow-y-auto'>
      {/* Thêm container cuộn */}
      <div
        className='max-w-6xl mx-auto space-y-6 sm:space-y-8 mt-4 '
        style={{ maxHeight: "80vh" }} // Giới hạn chiều cao và cho phép cuộn
      >
        <div className='flex items-center gap-2 text-base sm:text-2xl   text-white mt-10 justify-center'>
          <Rocket className='text-[#FF9A8B]' />
          <h1 className=''>I will arrange my life in my own way.</h1>
          <Globe />
        </div>
      </div>
    </div>
  );
}
