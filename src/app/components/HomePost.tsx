import { ArrowLongLeftIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HomePost() {
  return (
    <>
      <div className='flex justify-between p-2'>
        <div className='flex items-center gap-1'>
          <span className='font-semibold text-lg'>HOME</span>
        </div>
      </div>

      <div className='w-full resize-none border-y p-2 '>
        <Link href={"/posts/create"}>
          <textarea
            className='w-full resize-none outline-none'
            placeholder='Composo new post...'
          ></textarea>
        </Link>

        <PhotoIcon className='size-6 cursor-pointer text-gray-500' />
      </div>

      <div className='bg-gray-100 h-2'></div>
    </>
  );
}
