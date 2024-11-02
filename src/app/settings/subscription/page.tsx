import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

export default function Subscription() {
  return (
    <div className="w-full lg:max-w-[38rem] border-r">
      <div className="flex justify-between py-2 px-4 sticky top-0  items-center bg-white z-20">
        <span className="font-semibold text-xl uppercase">Subscription</span>
      </div>

      <div className="bg-gray-100 h-2 border-t"></div>

      <div className="px-4 pb-4 border-b">
        <TextInput label="$ Price per month" />

        <div className="leading-4 px-3">
          <span className="text-xs text-gray-300 ">Minimum $0 USD or free</span>

          <p className="text-xs text-gray-400">
            You must Add a{" "}
            <a href="#" className="text-blue-400">
              Bank Account
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-400">
              Payment Information
            </a>{" "}
            before you can set your price or accept tips.
          </p>
        </div>
      </div>

      <div className="flex gap-2 p-2 justify-end ">
        <Button variante="outline">CANCEL</Button>
        <Button>SAVE</Button>
      </div>

      <div className="bg-gray-100 h-2 border-t"></div>
    </div>
  );
}
