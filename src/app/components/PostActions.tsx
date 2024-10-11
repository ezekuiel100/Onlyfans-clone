import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function PostActions() {
  return (
    <div className='flex justify-between items-center p-1 py-3 text-gray-500'>
      <div className='flex gap-2'>
        <HeartIcon className='size-6 cursor-pointer' />
        <ChatBubbleOvalLeftIcon className='size-6 cursor-pointer' />
      </div>
      <BookmarkIcon className='size-6 cursor-pointer' />
    </div>
  );
}
