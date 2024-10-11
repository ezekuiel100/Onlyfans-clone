import { Dispatch, SetStateAction } from "react";

export default function TabOption({
  tab,
  setTab,
  text,
}: {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
  text: string;
}) {
  return (
    <div className='flex-1 relative'>
      <div
        onClick={() => setTab(text)}
        className={`hover:bg-blue-100 hover:text-blue-500  text-center text-gray-400 py-1 m-1 rounded-sm transition-all `}
      >
        {text}
      </div>

      {tab === text && (
        <div className={`absolute h-[1px] w-full bg-blue-400`}></div>
      )}
    </div>
  );
}
