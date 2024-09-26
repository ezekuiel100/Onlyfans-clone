import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { FcGoogle } from "react-icons/fc";
import EmailINput from "./EmailInput";

export default function AuthScreen() {
  return (
    <form className='w-80 flex flex-col gap-3 mx-auto mt-44'>
      <EmailINput />

      {/* <label htmlFor='' className='font-semibold'>
        Password
      </label>
      <input type='password' className='border border-1 rounded-md p-1'></input> */}

      <span className='text-center'>Or</span>

      <LoginLink
        className='bg-gray-200 rounded-md p-2 font-semibold text-center flex gap-2 justify-center items-center'
        authUrlParams={{
          connection_id: process.env.KINDE_CONNECTION_GOOGLE || "",
        }}
      >
        <FcGoogle />
        Continue with Google
      </LoginLink>

      <p className='text-center'>
        No account?{" "}
        <RegisterLink className='text-blue-600 font-semibold '>
          Create one
        </RegisterLink>
      </p>
    </form>
  );
}
