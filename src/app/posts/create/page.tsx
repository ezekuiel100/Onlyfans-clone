"use client";

import Button from "@/app/components/Button";
import NewPostHeader from "@/app/components/NewPostHeader";
import NewPostTextarea from "@/app/components/NewPostTextarea";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function NewPost() {
  const [file, setFile] = useState<File | null>(null);
  const [postContent, setPostContent] = useState("");

  const { user } = useUser();

  async function handlePost() {
    if (!file) return;

    const base64file = await toBase64(file);

    fetch("/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: base64file,
        content: postContent,
        fileName: file.name,
        id: user?.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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

      <NewPostTextarea
        postContent={postContent}
        setPostContent={setPostContent}
        setFile={setFile}
      />

      <div className="bg-gray-100 h-2 "></div>
    </div>
  );
}
