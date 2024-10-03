import { useUser } from "@clerk/nextjs";
import UserAvatar from "./UserAvatart";

export default function Posts() {
  const { user } = useUser();

  const description = true;
  const image = true;

  if (!user) {
    return <>Carregando...</>;
  }

  return (
    <div>
      <div className='flex p-2 justify-between'>
        <div className='flex gap-1'>
          <UserAvatar size={"small"} />
          <div>
            <p className='font-semibold text-lg'>{user?.fullName}</p>
            <p className='text-gray-400'>@{user?.username}</p>
          </div>
        </div>

        <span className='text-gray-400 hover:text-blue-400 cursor-pointer hover:underline'>
          10h
        </span>
      </div>

      {description && (
        <p className='px-2 pb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit voluptatibus, minus mollitia ullam totam
          dolore ipsa quas consectetur, accusamus labore quidem explicabo nihil
          quos dolorem, nam nisi? Doloribus, enim?
        </p>
      )}

      {image && <img src='horse-1.png'></img>}
    </div>
  );
}
