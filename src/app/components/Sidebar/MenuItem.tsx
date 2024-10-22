import Link from "next/link";
import { ReactNode } from "react";

type MenuItemProps = {
  menu: {
    text: string;
    href: string | null;
    icon: ReactNode;
  };
};

export default function MenuItem({ menu }: MenuItemProps) {
  return (
    <li>
      {menu.href && (
        <Link
          href={menu.href}
          className="flex items-center gap-2 font-bold text-gray-500 hover:bg-blue-100 hover:text-blue-400 rounded-full p-2"
        >
          {menu.icon}
          <span className="hidden lg:block text-lg">{menu.text}</span>
        </Link>
      )}
    </li>
  );
}
