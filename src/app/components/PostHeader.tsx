import UserAvatar from "./UserAvatart";
import UserInfo from "./UserInfo";

export default function PostHeader({
  user,
}: {
  user: { fullName: string | null; username: string | null };
}) {
  return (
    <div className='flex p-2 justify-between '>
      <div className='flex gap-1'>
        <UserAvatar size={"small"} />

        <UserInfo user={user} />
      </div>

      <span className='text-gray-400 hover:text-blue-400 cursor-pointer hover:underline'>
        10h
      </span>
    </div>
  );
}
