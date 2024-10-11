import { Dispatch, SetStateAction } from "react";
import TabOption from "./TabOption";

export default function ContentTabs({
  tab,
  setTab,
}: {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className='flex gap-2 font-semibold  justify-around cursor-pointer border-b '>
      <TabOption tab={tab} setTab={setTab} text={"Posts"} />
      <TabOption tab={tab} setTab={setTab} text={"Midia"} />
    </div>
  );
}
