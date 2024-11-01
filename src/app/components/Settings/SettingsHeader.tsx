import Button from "../Button";
import UserAvatar from "../UserAvatar";

export default function SettingsHeader() {
  return (
    <>
      <div className="flex justify-between py-2 px-4 sticky top-0 border-b items-center bg-white z-20">
        <span className="font-semibold text-xl uppercase">Edit Profile</span>
        <Button>Save</Button>
      </div>

      <div className="bg-gray-200 h-44"></div>

      <div className="-mt-10 ml-3 inline-block">
        <UserAvatar size="normal" />
      </div>
    </>
  );
}
