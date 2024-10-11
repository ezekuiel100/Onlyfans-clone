import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton({
  colorClass,
  hoverClass,
}: {
  colorClass: string;
  hoverClass: string;
}) {
  return (
    <div className={`p-1 rounded-full ${hoverClass} transition-all `}>
      <ArrowLongLeftIcon
        className={`size-7 cursor-pointer ${colorClass} transition-all`}
      />
    </div>
  );
}
