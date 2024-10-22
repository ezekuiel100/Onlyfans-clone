import { useUser } from "@clerk/nextjs";

import PostSkeleton from "./PostSkeleton";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import { useEffect, useState } from "react";

type PostsType = {
  id: string;
  text: string;
  mediaUrl: string;
  mediaType: string | null;
  date: string;
};

export default function Post() {
  const { user } = useUser();
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    fetch("/api/getPosts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  if (!user) {
    return <PostSkeleton />;
  }

  if (!posts.length) return;

  return (
    <>
      {posts.map((post: PostsType) => {
        return (
          <div key={post.id} className="border-b ">
            <PostHeader user={user} date={post.date} />
            <p className="px-2 pb-2">{post.text}</p>

            {post.mediaType === "image" && (
              <img src={post.mediaUrl} className="w-full" />
            )}

            {post.mediaType === "video" && (
              <video src={post.mediaUrl} controls className="w-full" />
            )}
            <PostActions />
          </div>
        );
      })}
    </>
  );
}
