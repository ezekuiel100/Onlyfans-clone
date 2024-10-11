"use client";

import { useUser } from "@clerk/nextjs";
import UserAvatar from "../components/UserAvatart";
import { useParams } from "next/navigation";
import SubscribeButton from "./SubscribeButton";
import ProfileDescription from "./ProfileDescription";
import ProfileStats from "./ProfileStats";
import EditProfileButton from "./EditProfileButton";
import ContentTabs from "./ContentTabs";
import { Dispatch, SetStateAction } from "react";

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
        <EditProfileButton />

        <div>
          <p className='text-xl font-semibold'>{user?.fullName}</p>
          <p className='text-gray-500'>@{user?.username}</p>
        </div>
      </div>

      <ProfileDescription />

      <div className='bg-gray-100 h-2 border-t'></div>

      {username != user.username && <SubscribeButton />}

      <div className='bg-gray-100 h-2 border-t'></div>

      <ContentTabs tab={tab} setTab={setTab} />
    </>
  );
}
