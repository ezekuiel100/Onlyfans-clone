"use client";

import { useUser } from "@clerk/nextjs";

export default function UserAvatar() {
  const { user } = useUser();

  return (
    <>
      <img
        src={user?.imageUrl}
        alt=''
        className='rounded-full w-20 h-20 relative -top-7 left-5 border-2 select-none'
      />
    </>
  );
}
