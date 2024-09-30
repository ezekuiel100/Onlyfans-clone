import {
  HeartIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export default function UserProfile() {
  return (
    <div className='w-full h-44 bg-blue-300 relative'>
      <img
        src='paisagem.webp'
        className='h-44 w-full object-cover select-none'
      ></img>

      <div className='absolute top-0 z-10 bg-gradient-to-b from-slate-700 to-transparent w-full h-full  '></div>

      <div className='absolute top-0 p-1 z-20'>
        <div className='text-white font-semibold'>Jhon harris</div>

        <div className='flex gap-2'>
          <div className='flex gap-1 text-white'>
            <PhotoIcon className='size-6' />
            35
          </div>

          <div className='flex gap-1 text-white'>
            <VideoCameraIcon className='size-6' />
            20
          </div>

          <div className='flex gap-1 text-white'>
            <HeartIcon className='size-6 ' />
            540
          </div>
        </div>
      </div>
    </div>
  );
}
