"use client";
import {
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import { useUser } from "@clerk/nextjs";

export default function MenuList() {
  const { user } = useUser();

  if (!user) return;

  const menu = [
    { text: "Home", icon: <HomeIcon className="size-6" />, href: "/" },
    {
      text: "Notifications",
      icon: <BellIcon className="size-6" />,
      href: "notifications",
    },
    {
      text: "Profile",
      icon: <UserIcon className="size-6" />,
      href: user && user.username,
    },
    {
      text: "Settings",
      icon: <Cog6ToothIcon className="size-6" />,
      href: "settings",
    },
  ];

  return (
    <ul className="space-y-4 ">
      {menu.map((menu) => (
        <MenuItem menu={menu} key={menu.href} />
      ))}
    </ul>
  );
}
