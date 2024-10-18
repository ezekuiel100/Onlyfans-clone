import { PhotoIcon } from "@heroicons/react/24/outline";

export default function NewPostTextarea() {
  return (
    <div className="w-full resize-none border-y p-2 ">
      <textarea
        className="w-full resize-none outline-none"
        placeholder="New post..."
      ></textarea>

      <PhotoIcon className="size-6 cursor-pointer text-gray-500" />
    </div>
  );
}
