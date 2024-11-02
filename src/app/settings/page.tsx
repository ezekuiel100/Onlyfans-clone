import Link from "next/link";
import SettingsHeader from "../components/Settings/SettingsHeader";
import TextInput from "../components/TextInput";

export default function Settings() {
  return (
    <div className="w-full lg:max-w-[38rem] border-r">
      <div className="pb-4">
        <SettingsHeader />

        <form className="px-4 py-4 space-y-5">
          <TextInput label={"Username"} />
          <TextInput label={"Display name"} />
          <TextInput label={"Bio"} />
        </form>
      </div>

      <div className="bg-gray-100 h-2 border-t"></div>

      <div>
        <p className="font-semibold p-3 border-b">Subsciption</p>

        <Link
          href="/settings/subscription"
          className="p-2 m-1 mx-2 block hover:bg-blue-100/40 transition-all hover:text-blue-500"
        >
          Subscription price and bundles
        </Link>
      </div>

      <div className="bg-gray-100 h-2 border-t"></div>
    </div>
  );
}
