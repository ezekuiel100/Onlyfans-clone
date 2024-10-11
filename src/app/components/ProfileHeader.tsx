import {
  ArrowLongLeftIcon,
  HeartIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export default function ProfileHeader({
  user,
}: {
  user: { fullName: string };
}) {
  return (
    <div className='absolute top-0 py-1 px-4 select-none'>
      <div className='flex gap-2 items-center'>
        <div className='p-1 rounded-full hover:bg-white/10 '>
          <ArrowLongLeftIcon className='size-7 text-white cursor-pointer ' />
        </div>

        <div>
          <p className='text-white text-xl font-semibold'>{user?.fullName}</p>

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
    </div>
  );
}
