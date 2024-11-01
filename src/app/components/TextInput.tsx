"use client";

import { useState } from "react";

export default function TextInput({ label }: { label: string }) {
  const [isFocused, setIsfocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsfocused(true);
  const handleBlur = () => setIsfocused(false);

  return (
    <div className="pt-4 relative">
      {(isFocused || value) && (
        <span className="text-sm text-gray-400 absolute top-1 left-4 bg-white px-1">
          {label}
        </span>
      )}
      <input
        type="text"
        value={value}
        className="border border-gray-400 w-full p-3 rounded-md outline-none hover:border-gray-500 transition-all focus:border-blue-300"
        placeholder={isFocused ? "" : label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
