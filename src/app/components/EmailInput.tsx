"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";

export default function EmailINput() {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <label htmlFor='' className='font-semibold'>
        Email
      </label>

      <input
        type='email'
        required
        className='border border-1 rounded-md p-1'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <LoginLink
        className='bg-blue-600 text-white text-center rounded-md p-2 font-semibold'
        authUrlParams={{
          connection_id: "conn_019225b51419957f1c83d1e50ef5de46",
          login_hint: email,
        }}
      >
        Continue
      </LoginLink>
    </>
  );
}
