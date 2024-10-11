import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  return (
    <div className='p-1 rounded-full hover:bg-white/10 '>
      <ArrowLongLeftIcon className='size-7 text-white cursor-pointer ' />
    </div>
  );
}
