"use client";

import { useUser } from "@clerk/nextjs";
import {
  ConnectAccountOnboarding,
  ConnectComponentsProvider,
} from "@stripe/react-connect-js";
import Button from "../components/Button";

export default function BecomeCreator() {
  const data = useUser();

  const email = data?.user?.emailAddresses[0].emailAddress;

  function createAccount() {
    fetch("/api/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full lg:max-w-[38rem] border-r pb-10  ">
      <div className="py-4 space-y-6 flex flex-col items-center">
        <h2 className="text-xl">Add information to start accepting money</h2>
        <Button onClick={createAccount}>Create an account!</Button>
      </div>
    </div>
  );
}
