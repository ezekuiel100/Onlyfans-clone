export default function UserInfo({
  user,
}: {
  user: { fullName: string | null; username: string | null };
}) {
  return (
    <div>
      <p className='text-xl font-semibold'>{user?.fullName}</p>
      <p className='text-gray-500'>@{user?.username}</p>
    </div>
  );
}
