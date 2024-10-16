"use client";

import Hero from "./components/hero";
import { SignedIn, SignedOut, SignIn, useUser } from "@clerk/nextjs";
import Posts from "./components/Post/Post";
import NewPost from "./components/HomePost";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      fetch("/api/clerk-user-created", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          email: user.emailAddresses[0].emailAddress,
          fullName: user.fullName,
          username: user.username,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Erro:", error));
    }
  }, [isSignedIn, user]);

  return (
    <>
      <SignedOut>
        <div className="grid grid-cols-2 justify-center items-center">
          <Hero />
          <div className="m-auto ">
            <SignIn routing="hash" />
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="w-full lg:max-w-[38rem] border-r pb-10">
          <NewPost />
          <Posts />
        </div>
      </SignedIn>
    </>
  );
}
