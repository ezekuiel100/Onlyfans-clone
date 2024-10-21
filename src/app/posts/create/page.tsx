"use client";

import Button from "@/app/components/Button";
import NewPostHeader from "@/app/components/NewPostHeader";
import NewPostTextarea from "@/app/components/NewPostTextarea";
import { useUser } from "@clerk/nextjs";
import { createContext, useState } from "react";

type PostContextType = {
  postContent: string;
  setPostContent: (value: string) => void;
  setFile: (file: File) => void;
  fileImg: string | null;
  setFileImg: (value: string | null) => void;
  videoFile: string | null;
  setVideoFile: (value: string | null) => void;
};

export const PostContext = createContext<PostContextType | null>(null);

export default function NewPost() {
  const [fileImg, setFileImg] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [postContent, setPostContent] = useState("");

  const { user } = useUser();

  async function handlePost() {
    try {
      let base64file;

      if (!file) {
        base64file = null;
      } else {
        base64file = await toBase64(file);
      }

      const response = await fetch("/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: base64file,
          content: postContent,
          fileName: file?.name,
          id: user?.id,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setPostContent("");
        setFileImg(null);
        setVideoFile(null);
        console.log(data);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  }

  function toBase64(file: File) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => resolve(e.target?.result);
    });
  }

  return (
    <div className="w-full lg:max-w-[38rem] border-r">
      <div className="flex justify-between p-2 ">
        <NewPostHeader />
        <div className="flex gap-2">
          <Button variante="outline" onClick={() => setPostContent("")}>
            CLEAR
          </Button>
          <Button onClick={handlePost}>POST</Button>
        </div>
      </div>

      <PostContext.Provider
        value={{
          postContent,
          setPostContent,
          setFile,
          fileImg,
          setFileImg,
          videoFile,
          setVideoFile,
        }}
      >
        <NewPostTextarea />
      </PostContext.Provider>

      <div className="bg-gray-100 h-2 "></div>
    </div>
  );
}
