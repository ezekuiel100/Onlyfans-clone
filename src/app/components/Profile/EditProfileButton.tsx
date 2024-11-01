import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EditProfileButton() {
  return (
    <Link
      href={"/settings"}
      className="p-2 px-4 h-11 border flex gap-1 max-w-fit place-self-end mr-3 border-blue-200 hover:border-blue-400 rounded-full uppercase text-blue-500 hover:bg-blue-100  transition-all"
    >
      <Cog6ToothIcon className="size-6 text-blue-500" />
      edit profile
    </Link>
  );
}
