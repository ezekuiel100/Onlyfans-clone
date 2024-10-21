import { useUser } from "@clerk/nextjs";

import PostSkeleton from "./PostSkeleton";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import { useEffect, useState } from "react";

export default function Post() {
  const { user } = useUser();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/getPosts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  if (!user) {
    return <PostSkeleton />;
  }

  if (!posts) return;

  console.log(posts);

  return (
    <div className="border-b ">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostHeader user={user} />
            <p className="px-2 pb-2">{post.text}</p>
            <img src={post.mediaUrl} />
            <PostActions />
          </div>
        );
      })}
    </div>
  );
}
