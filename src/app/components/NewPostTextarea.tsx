"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { usePostContent } from "@/context/usePostContent";

export default function NewPostTextarea() {
  const {
    postContent,
    setPostContent,
    setFile,
    fileImg,
    setFileImg,
    videoFile,
    setVideoFile,
  } = usePostContent();
  const ref = useRef<HTMLInputElement | null>(null);

  function handleFile() {
    const file = ref.current?.files?.[0];

    if (!file) return;

    setFile(file);

    const url = URL.createObjectURL(file);

    if (file.type.startsWith("video/")) {
      setFileImg(null);
      setVideoFile(url);
    } else if (file.type.startsWith("image/")) {
      setFileImg(url);
      setVideoFile(null);
    }
  }

  useEffect(() => {
    return () => {
      if (fileImg) URL.revokeObjectURL(fileImg);
      if (videoFile) URL.revokeObjectURL(videoFile);
    };
  }, [fileImg, videoFile]);

  return (
    <div className="w-full resize-none border-y p-2 ">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        className="w-full resize-none outline-none"
        placeholder="New post..."
      ></textarea>

      <input
        ref={ref}
        type="file"
        id="file"
        accept="video/*, image/*"
        className="hidden"
        onChange={() => handleFile()}
      />
      <label htmlFor="file">
        <PhotoIcon className="size-6 cursor-pointer text-gray-500" />
      </label>

      {fileImg && <img src={fileImg} className="h-32 w-48" />}
      {videoFile && <video src={videoFile} controls className="h-32 w-48" />}
    </div>
  );
}
