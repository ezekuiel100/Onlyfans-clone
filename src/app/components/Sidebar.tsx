import {
  ClipboardIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className='inline-block space-y-3 p-3 lg:w-1/5 h-screen border-r sticky'>
      <Link href='#' className='flex gap-1 font-bold'>
        <HomeIcon className='size-6' />
        <span className='hidden lg:block'>Home</span>
      </Link>

      <Link href='#' className='flex gap-1 font-bold'>
        <ClipboardIcon className='size-6' />
        <span className='hidden lg:block'>Dashboard</span>
      </Link>

      <Link href='#' className='flex gap-1 font-bold'>
        <Cog6ToothIcon className='size-6' />
        <span className='hidden lg:block'>Settings</span>
      </Link>
    </nav>
  );
}
