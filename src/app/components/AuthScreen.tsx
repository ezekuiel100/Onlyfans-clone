import { FcGoogle } from "react-icons/fc";
import EmailINput from "./EmailInput";

export default function AuthScreen() {
  return (
    <form className='w-80 flex flex-col gap-3 mx-auto mt-44'>
      <EmailINput />
      <span className='text-center'>Or</span>
      <FcGoogle />
      Continue with Google
      <p className='text-center'>No account? Create one</p>
    </form>
  );
}
