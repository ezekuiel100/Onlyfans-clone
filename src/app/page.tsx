"use client";

import { useEffect } from "react";
import { SignedIn, SignedOut, SignIn, useUser } from "@clerk/nextjs";
import Hero from "./components/hero";
import Posts from "./components/Post/Post";
import HomePost from "./components/HomePost";

export default function Home() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      fetch("/api/clerk-user-created", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
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
        <Hero />
      </SignedOut>

      <SignedIn>
        <div className="w-full lg:max-w-[38rem] border-r pb-10">
          <HomePost />
          <Posts />
        </div>
      </SignedIn>
    </>
  );
}
