"use client";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useUser } from "@clerk/nextjs";
import UserAvatar from "../components/UserAvatart";
import { Dispatch, SetStateAction } from "react";
import { useParams } from "next/navigation";
import SubscribeButton from "./SubscribeButton";
import ProfileDescription from "./ProfileDescription";
import ProfileStats from "./ProfileStats";

export default function Profile({
  tab,
  setTab,
}: {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}) {
  const { user } = useUser();
  const { username } = useParams();

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

      <ProfileStats user={user} />

      <div className='relative grid grid-cols-2 -mt-7 ml-3  z-50 '>
        <UserAvatar size={"normal"} />

        <button className='p-2 px-4 h-11 border flex gap-1 max-w-fit place-self-end mr-3 border-blue-200 hover:border-blue-400 rounded-full uppercase text-blue-500 hover:bg-blue-100  transition-all'>
          <Cog6ToothIcon className='size-6 text-blue-500' />
          edit profile
        </button>

        <div>
          <p className='text-xl font-semibold'>{user?.fullName}</p>
          <p className='text-gray-500'>@{user?.username}</p>
        </div>
      </div>

      <ProfileDescription />

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
