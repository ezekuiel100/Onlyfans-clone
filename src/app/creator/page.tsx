"use client";

import { useUser } from "@clerk/nextjs";

import Button from "../components/Button";
import { useEffect, useState } from "react";

export default function BecomeCreator() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccountComplete, setIsAccountComplete] = useState(false);
  const data = useUser();

  const email = data?.user?.emailAddresses[0].emailAddress;

  useEffect(() => {
    if (!email) return;

    fetch("/api/account/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => setIsAccountComplete(data.isAccountComplete))
      .catch((error) => console.log(error));
  }, [email]);

  function createAccount() {
    setIsLoading(true);
    fetch("/api/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((response) => {
        if (!response.ok) return;

        return response.json();
      })
      .then((data) => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch((error) => console.log(error));
  }

  function accountDetails() {
    setIsLoading(true);

    fetch("/api/account/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  }

  return (
    <div className="w-full lg:max-w-[38rem] border-r pb-10  ">
      <div className="py-4 space-y-6 flex flex-col items-center">
        {isAccountComplete ? (
          <>
            <h2 className="text-xl">Conta de Pagamentos Configurada</h2>
            <p className="text-gray-700">
              Sua conta Stripe está configurada e pronta para receber
              pagamentos.
            </p>
            <Button onClick={accountDetails} disabled={isLoading}>
              Acessa o Dashboard
            </Button>
          </>
        ) : (
          <>
            <h2 className="text-xl">
              Add information to start accepting money
            </h2>
            <Button onClick={createAccount} disabled={isLoading}>
              {isLoading ? "Loading..." : "Add information"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
