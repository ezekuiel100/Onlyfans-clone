import NewPostHeader from "@/app/components/NewPostHeader";
import NewPostTextarea from "@/app/components/NewPostTextarea";

export default function NewPost() {
  return (
    <div className="w-full lg:max-w-[38rem] border-r">
      <div className="flex justify-between p-2 ">
        <NewPostHeader />
        <div className="flex gap-2">
          <button className="border rounded-full py-1 px-3 text-blue-400 hover:border-blue-500 transition-all">
            CLEAR
          </button>
          <button className="bg-blue-400 hover:bg-blue-600  text-white rounded-full py-1 px-3 transition-all ">
            POST
          </button>
        </div>
      </div>

      <NewPostTextarea />

      <div className="bg-gray-100 h-2"></div>
    </div>
  );
}
