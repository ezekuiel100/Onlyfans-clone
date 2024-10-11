import {
  HeartIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import BackButton from "./BackButton";
import ProfileStatsItem from "./ProfileStatsItem";

export default function ProfileStats({
  user,
}: {
  user: { fullName: string | null };
}) {
  return (
    <div className='absolute top-0 py-1 px-4 select-none'>
      <div className='flex gap-2 items-center'>
        <BackButton colorClass='text-white' hoverClass='hover:bg-white/10' />

        <div>
          <p className='text-white text-xl font-semibold'>{user?.fullName}</p>

          <div className='flex gap-2'>
            <ProfileStatsItem icon={PhotoIcon} value={"35"} />

            <ProfileStatsItem icon={VideoCameraIcon} value={"20"} />

            <ProfileStatsItem icon={HeartIcon} value={"400"} />
          </div>
        </div>
      </div>
    </div>
  );
}
