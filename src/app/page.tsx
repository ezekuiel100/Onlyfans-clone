import Hero from "./components/hero";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className='flex max-w-2xl lg:max-w-2xl mx-auto'>
          <Sidebar />
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
