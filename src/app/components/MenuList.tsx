import {
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const menu = [
  { text: "Home", icon: <HomeIcon className='size-6' />, href: "/" },
  {
    text: "Notifications",
    icon: <BellIcon className='size-6' />,
    href: "notifications",
  },
  { text: "Profile", icon: <UserIcon className='size-6' />, href: "profile" },
  {
    text: "Settings",
    icon: <Cog6ToothIcon className='size-6' />,
    href: "settings",
  },
];

export default function MenuList() {
  return (
    <ul className='space-y-4 '>
      {menu.map((menu) => (
        <MenuItem menu={menu} key={menu.href} />
      ))}
    </ul>
  );
}
