"use client";


export function BottomTabs() {
  
  return (
    <div className='fixed bottom-0 left-0 right-0 h-6 bg-[#007ACC] flex items-center px-4 text-white text-xs'>
      <div className='flex items-center gap-4'>
        <span>main</span>
        <span>0</span>
        <span>0</span>
      </div>
      <div className='ml-auto flex items-center gap-4'>
        <span>Powered by Next.js</span>
        <span>Prettier</span>
      </div>
    </div>
  );
}
