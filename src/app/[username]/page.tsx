"use client";

import { useState } from "react";
import Profile from "../components/Profile";
import Posts from "../components/Post";

export default function ProfilePage() {
  const [tab, setTab] = useState("Posts");

  return (
    <>
      <div className='max-w-xl w-full lg:w-2xl border-r pb-10'>
        <Profile tab={tab} setTab={setTab} />
        {tab === "Posts" && <Posts />}
      </div>
    </>
  );
}
