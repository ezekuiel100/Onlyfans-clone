import { ArrowLongLeftIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function NewPost() {
  return (
    <>
      <div className='flex justify-between p-2'>
        <div className='flex items-center gap-1'>
          <div className='p-1 rounded-full hover:bg-blue-100/50 hover:text-blue-500 transition-all'>
            <ArrowLongLeftIcon className='size-7 cursor-pointer' />
          </div>
          <span className='font-semibold text-lg'>NEW POST</span>
        </div>

        <div className='flex gap-2'>
          <button className='border rounded-full py-1 px-3 text-blue-400 hover:border-blue-500 transition-all'>
            CLEAR
          </button>
          <button className='bg-blue-400 hover:bg-blue-600  text-white rounded-full py-1 px-3 transition-all '>
            POST
          </button>
        </div>
      </div>

      <div className='w-full resize-none border-y p-2 '>
        <textarea
          className='w-full resize-none outline-none'
          placeholder='New post...'
        ></textarea>

        <PhotoIcon className='size-6 cursor-pointer text-gray-500' />
      </div>

      <div className='bg-gray-100 h-2'></div>
    </>
  );
}
