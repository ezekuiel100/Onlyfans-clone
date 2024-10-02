import Hero from "./components/hero";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className='max-w-xl lg:max-w-2xl border-r'>
          <UserProfile />
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
