import { useUser } from "@clerk/nextjs";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import PostSkeleton from "./PostSkeleton";
import PostHeader from "./PostHeader";

export default function Post() {
  const { user } = useUser();

  const description = true;
  const image = true;

  if (!user) {
    return <PostSkeleton />;
  }

  return (
    <div className='border-b '>
      <PostHeader user={user} />

      {description && (
        <p className='px-2 pb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit voluptatibus, minus mollitia ullam totam
          dolore ipsa quas consectetur, accusamus labore quidem explicabo nihil
          quos dolorem, nam nisi? Doloribus, enim?
        </p>
      )}

      {image && <img src='horse-1.png'></img>}

      <div className='flex justify-between items-center p-1 py-3 text-gray-500'>
        <div className='flex gap-2'>
          <HeartIcon className='size-6 cursor-pointer' />
          <ChatBubbleOvalLeftIcon className='size-6 cursor-pointer' />
        </div>
        <BookmarkIcon className='size-6 cursor-pointer' />
      </div>
    </div>
  );
}
