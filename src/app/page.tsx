"use client";

import Hero from "./components/hero";
import { SignedIn, SignedOut, SignIn, useUser } from "@clerk/nextjs";
import Posts from "./components/Post";
import NewPost from "./components/HomePost";

export default function Home() {
  return (
    <>
      <SignedOut>
        <div className='grid grid-cols-2 justify-center items-center'>
          <Hero />
          <div className='m-auto '>
            <SignIn routing='hash' />
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className='w-full lg:max-w-[38rem] border-r pb-10'>
          <NewPost />
          <Posts />
        </div>
      </SignedIn>
    </>
  );
}
