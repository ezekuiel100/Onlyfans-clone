import Button from "../Button";

export default function SettingsHeader() {
  return (
    <>
      <div className="flex justify-between py-2 px-4 sticky top-0 border-b items-center bg-white z-20">
        <span className="font-semibold text-xl uppercase">Edit Profile</span>
        <Button>Save</Button>
      </div>
    </>
  );
}
