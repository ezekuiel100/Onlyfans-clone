import { useContext } from "react";
import { PostContext } from "@/app/posts/create/page";

export function usePostContent() {
  const postContext = useContext(PostContext);

  if (!postContext) {
    throw new Error(
      "usePostContent must be used within a PostContext Provider"
    );
  }

  const {
    postContent,
    setPostContent,
    setFile,
    fileImg,
    setFileImg,
    videoFile,
    setVideoFile,
  } = postContext;

  return {
    postContent,
    setPostContent,
    setFile,
    fileImg,
    setFileImg,
    videoFile,
    setVideoFile,
  };
}
