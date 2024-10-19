import Button from "@/app/components/Button";
import NewPostHeader from "@/app/components/NewPostHeader";
import NewPostTextarea from "@/app/components/NewPostTextarea";

export default function NewPost() {
  return (
    <div className="w-full lg:max-w-[38rem] border-r">
      <div className="flex justify-between p-2 ">
        <NewPostHeader />
        <div className="flex gap-2">
          <Button variante="outline">CLEAR</Button>
          <Button>POST</Button>
        </div>
      </div>

      <NewPostTextarea />

      <div className="bg-gray-100 h-2 "></div>
    </div>
  );
}
