import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function NewPostHeader() {
  return (
    <div className="flex items-center gap-1">
      <div className="p-1 rounded-full hover:bg-blue-100/50 hover:text-blue-500 transition-all">
        <Link href={"/"}>
          <ArrowLongLeftIcon className="size-7 cursor-pointer" />
        </Link>
      </div>
      <span className="font-semibold text-lg">NEW POST</span>
    </div>
  );
}
