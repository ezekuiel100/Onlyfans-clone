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

        <Sidebar />
      </SignedIn>

      <SignedOut>
        <div className='grid grid-cols-2'>
          <Hero />
          <div className=' m-auto'>
            <SignIn routing='hash' />
          </div>
        </div>
      </SignedOut>
    </>
  );
}
