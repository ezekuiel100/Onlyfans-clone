import { Dispatch, SetStateAction } from "react";

export default function ContentTabs({
  tab,
  setTab,
}: {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className='flex gap-2 font-semibold  justify-around cursor-pointer border-b '>
      <div className='flex-1 relative'>
        <div
          onClick={() => setTab("posts")}
          className={`hover:bg-blue-100 hover:text-blue-500  text-center text-gray-400 py-1 m-1 rounded-sm transition-all `}
        >
          5 Posts
        </div>

        {tab === "posts" && (
          <div className={`absolute h-[1px] w-full bg-blue-400`}></div>
        )}
      </div>

      <div className='flex-1 relative'>
        <div
          onClick={() => setTab("midia")}
          className='hover:bg-blue-100 hover:text-blue-500 text-center text-gray-400 py-1 m-1 rounded-sm transition-all'
        >
          4 Midia
        </div>

        {tab === "midia" && (
          <div className={`absolute h-[1px] w-full bg-blue-400`}></div>
        )}
      </div>
    </div>
  );
}
