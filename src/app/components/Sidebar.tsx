import {
  ClipboardIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <nav className='flex flex-col gap-3 p-3 bg-green-300 w-48 h-screen'>
      <a href='#' className='flex gap-1'>
        <HomeIcon className='size-6' />
        Home
      </a>

      <a href='#' className='flex gap-1'>
        <ClipboardIcon className='size-6' />
        Dashboard
      </a>

      <a href='#' className='flex gap-1'>
        <Cog6ToothIcon className='size-6' />
        Settings
      </a>
    </nav>
  );
}
