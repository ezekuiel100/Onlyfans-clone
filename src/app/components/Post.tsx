import { useUser } from "@clerk/nextjs";

import PostSkeleton from "./PostSkeleton";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";

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

      <PostActions />
    </div>
  );
}
