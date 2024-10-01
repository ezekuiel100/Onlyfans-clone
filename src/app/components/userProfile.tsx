"use client";

import {
  HeartIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import UserAvatar from "./UserAvatart";
import { useUser } from "@clerk/nextjs";
import Posts from "./Posts";

export default function UserProfile() {
  const { user } = useUser();

  return (
    <>
      <div>
        <div className='w-full h-44 bg-blue-300 relative'>
          <img
            src='paisagem.webp'
            className='h-44 w-full object-cover select-none'
          ></img>

          <div className='absolute top-0 bg-black/20  w-full h-full'></div>
        </div>

        <div className='absolute top-0 p-1 select-none'>
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

        <div className='relative inline-block -mt-7 ml-3 z-50'>
          <UserAvatar size={"normal"} />
          <p className='text-xl font-semibold'>{user?.fullName}</p>
          <p className='text-gray-500 text-sm'>@{user?.username}</p>
        </div>

        <div className='px-2 py-4 border-b'>
          The copyright of the material contained on my OnlyFans page (Including
          All Images & Video material) is owned by me. You do not have
          permission to Use, Copy, Reproduce, Print, or Play any of my material
          outside of My OnlyFans page.
        </div>

        <div className='bg-gray-100 h-2'></div>

        <div className='flex gap-2 font-semibold p-1 justify-around cursor-pointer border-b '>
          <div className='hover:bg-blue-100 hover:text-blue-500 flex-1 text-center text-gray-400 py-1 rounded-sm transition-all'>
            5 Posts
          </div>
          <div className='hover:bg-blue-100 hover:text-blue-500  flex-1 text-center text-gray-400 py-1 rounded-sm transition-all'>
            4 Midia
          </div>
        </div>

        <Posts user={user} />
      </div>
    </>
  );
}
