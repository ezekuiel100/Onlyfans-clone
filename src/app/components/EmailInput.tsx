"use client";
import { useState } from "react";

export default function EmailINput() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("12345678");

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
      Continue
    </>
  );
}
