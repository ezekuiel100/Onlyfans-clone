import { ArrowLongLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BackButton from "../components/BackButton";

export default function Notifications() {
  return (
    <div className='w-full lg:max-w-[38rem] border-r'>
      <div className='flex justify-between items-center p-2 border-b'>
        <div className='flex items-center  gap-2 '>
          <Link href={"/"}>
            <BackButton
              colorClass={"text-black hover:text-blue-500"}
              hoverClass={"hover:bg-blue-100/50"}
            />
          </Link>

          <span className='font-semibold text-lg uppercase'>Notifications</span>
        </div>

        <Cog6ToothIcon className='size-6 cursor-pointer' />
      </div>
    </div>
  );
}
