import Hero from "./components/hero";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <SignedIn>
        <header className=''>
          <div className='p-1  bg-red-400'>
            <UserButton />
          </div>
        </header>

        <div className='flex max-w-2xl lg:max-w-4xl bg-red-300 mx-auto'>
          <Sidebar />
          <div className='bg-green-300 w-full '>Feed</div>
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
