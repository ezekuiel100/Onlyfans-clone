"use client";

import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import UserAvatar from "../UserAvatart";
import SubscribeButton from "../SubscribeButton";
import ProfileDescription from "./ProfileDescription";
import ProfileStats from "./ProfileStats";
import EditProfileButton from "./EditProfileButton";
import ContentTabs from "../ContentTabs";
import ProfileHeader from "./ProfileHeader";
import UserInfo from "../UserInfo";
import ProfileSkeleton from "./ProfileSkeleton";

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
    return <ProfileSkeleton />;
  }

  return (
    <>
      <ProfileHeader />

      <ProfileStats user={user} />

      <div className='relative grid grid-cols-2 -mt-7 ml-3  z-50 '>
        <UserAvatar size={"normal"} />
        <EditProfileButton />

        <UserInfo user={user} />
      </div>

      <ProfileDescription />

      <div className='bg-gray-100 h-2 border-t'></div>

      {username != user.username && <SubscribeButton />}

      <div className='bg-gray-100 h-2 border-t'></div>

      <ContentTabs tab={tab} setTab={setTab} />
    </>
  );
}
