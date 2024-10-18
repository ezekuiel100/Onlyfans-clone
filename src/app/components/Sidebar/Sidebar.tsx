import { UserButton } from "@clerk/nextjs";

import Button from "../Button";
import MenuList from "./MenuList";

export default function Sidebar() {
  return (
    <nav className="flex flex-col items-center lg:items-stretch space-y-3 p-3 pr-9 lg:w-64 h-screen border-r sticky top-0">
      <UserButton />

      <MenuList />

      <Button>New post</Button>
    </nav>
  );
}
