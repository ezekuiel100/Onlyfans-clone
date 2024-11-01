"use client";

import { useUser } from "@clerk/nextjs";

export default function SubscribeButton() {
  const { user } = useUser();

  if (!user) return;

  async function handleSubscription() {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user.id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="flex flex-col font-semibold justify-center gap-3 px-4 py-4 ">
      <p className="uppercase text-gray-500">Subscription</p>
      <button
        onClick={handleSubscription}
        className="p-2 py-3 text-white text-sm  bg-blue-400 hover:bg-blue-500  font-semibold rounded-full transition-all uppercase"
      >
        Subscribe
      </button>
    </div>
  );
}
