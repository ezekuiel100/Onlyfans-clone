"use client";

import {
  ArrowLongLeftIcon,
  HeartIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@clerk/nextjs";
import UserAvatar from "../components/UserAvatart";
import { Dispatch, SetStateAction } from "react";
import { useParams } from "next/navigation";
import SubscribeButton from "./SubscribeButton";

export default function Profile({
  tab,
  setTab,
}: {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}) {
  const { user } = useUser();
  const { username } = useParams();

  console.log(user?.username);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className='w-full h-44 bg-blue-300 relative'>
        <img
          src='paisagem.webp'
          className='h-44 w-full object-cover select-none'
        ></img>

        <div className='absolute top-0 bg-black/20  w-full h-full'></div>
      </div>
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
      <div className='relative inline-block -mt-7 ml-3 z-50'>
        <UserAvatar size={"normal"} />
        <p className='text-xl font-semibold'>{user?.fullName}</p>
        <p className='text-gray-500'>@{user?.username}</p>
      </div>
      <div className='px-2 py-4'>
        The copyright of the material contained on my OnlyFans page (Including
        All Images & Video material) is owned by me. You do not have permission
        to Use, Copy, Reproduce, Print, or Play any of my material outside of My
        OnlyFans page.
      </div>

      <div className='bg-gray-100 h-2 border-t'></div>

      {username != user.username && <SubscribeButton />}

      <div className='bg-gray-100 h-2 border-t'></div>

      <div className='flex gap-2 font-semibold  justify-around cursor-pointer border-b '>
        <div className='flex-1 relative'>
          <div
            onClick={() => setTab("posts")}
            className={`hover:bg-blue-100 hover:text-blue-500  text-center text-gray-400 py-1 m-1 rounded-sm transition-all `}
          >
            5 Posts
          </div>

          {tab === "posts" && (
            <div className={`absolute h-[1px] w-full bg-blue-400`}></div>
          )}
        </div>

        <div className='flex-1 relative'>
          <div
            onClick={() => setTab("midia")}
            className='hover:bg-blue-100 hover:text-blue-500 text-center text-gray-400 py-1 m-1 rounded-sm transition-all'
          >
            4 Midia
          </div>

          {tab === "midia" && (
            <div className={`absolute h-[1px] w-full bg-blue-400`}></div>
          )}
        </div>
      </div>
    </>
  );
}
