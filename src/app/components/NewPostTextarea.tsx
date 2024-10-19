"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

export default function NewPostTextarea() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [fileImg, setFileImg] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);

  function handleFile() {
    const file = ref.current?.files?.[0];

    if (!file) return;

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
