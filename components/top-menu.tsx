export function TopMenu() {
  return (
    <div className='bg-[#3C3C3C] text-gray-300 px-4 py-1 text-sm flex justify-between items-center'>
      <ul className='flex space-x-4'>
        <li className='hover:text-white cursor-pointer'>File</li>
        <li className='hover:text-white cursor-pointer'>Edit</li>
        <li className='hover:text-white cursor-pointer'>View</li>
        <li className='hover:text-white cursor-pointer'>Go</li>
        <li className='hover:text-white cursor-pointer'>Run</li>
        <li className='hover:text-white cursor-pointer'>Terminal</li>
        <li className='hover:text-white cursor-pointer'>Help</li>
      </ul>
      <span className=' text-sm'>Huy Lưu - Visual Studio Code</span>
      <div className=' flex gap-x-2'>
        {/* <span>x</span> */}
        <div className=' size-3  bg-orange-700 rounded-full flex items-center justify-center'></div>
        <div className=' size-3 bg-orange-300 rounded-full cursor-pointer'></div>
        <div className=' size-3   bg-green-500 rounded-full'></div>
      </div>
    </div>
  );
}
