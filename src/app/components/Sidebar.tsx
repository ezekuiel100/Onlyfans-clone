import { UserButton } from "@clerk/nextjs";
import {
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const menu = [
  { text: "Home", icon: <HomeIcon className='size-6' />, href: "#" },
  { text: "Notifications", icon: <BellIcon className='size-6' />, href: "#" },
  { text: "Profile", icon: <UserIcon className='size-6' />, href: "#" },
  { text: "Settings", icon: <Cog6ToothIcon className='size-6' />, href: "#" },
];

export default function Sidebar() {
  return (
    <nav className='flex flex-col items-center lg:items-stretch space-y-3 p-3 pr-9 lg:w-64 h-screen border-r sticky top-0'>
      <UserButton />

      <ul className='space-y-4 '>
        {menu.map((menu, i) => (
          <li key={i}>
            <Link
              href={menu.href}
              className='flex items-center gap-2 font-bold text-gray-500 hover:bg-blue-100 hover:text-blue-400 rounded-full p-2'
            >
              {menu.icon}
              <span className='hidden lg:block text-lg'>{menu.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
