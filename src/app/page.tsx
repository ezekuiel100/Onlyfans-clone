import Hero from "./components/hero";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header className=' relative '>
        <SignedIn>
          <div className='p-1 absolute right-2 inline-block '>
            <UserButton />
          </div>
        </SignedIn>
      </header>

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
