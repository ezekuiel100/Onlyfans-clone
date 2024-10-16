"use client";

import { useUser } from "@clerk/nextjs";

export default function UserAvatar({ size }: { size: string }) {
  const { user } = useUser();

  return (
    <img
      src={user?.imageUrl}
      alt='profile image'
      className={`rounded-full ${size == "small" && "w-14 h-14"} ${
        size == "normal" && "w-20 h-20"
      } border-2 select-none `}
    />
  );
}
