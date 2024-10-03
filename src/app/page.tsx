"use client";

import Hero from "./components/hero";
import { SignedIn, SignedOut, SignIn, useUser } from "@clerk/nextjs";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className='max-w-xl lg:w-2xl border-r'>
          <Posts />
        </div>
      </SignedIn>

      <SignedOut>
        <div className='grid grid-cols-2 justify-center items-center'>
          <Hero />
          <div className=' m-auto'>
            <SignIn routing='hash' />
          </div>
        </div>
      </SignedOut>
    </>
  );
}
