import SettingsHeader from "../components/Settings/SettingsHeader";
import TextInput from "../components/TextInput";

export default function Settings() {
  return (
    <div className="w-full lg:max-w-[38rem] border-r">
      <SettingsHeader />

      <form className="px-4 py-2 space-y-5">
        <TextInput label={"Username"} />
        <TextInput label={"Display name"} />
        <TextInput label={"Bio"} />
      </form>
    </div>
  );
}
