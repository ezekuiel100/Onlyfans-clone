import { describe } from "node:test";
import UserAvatar from "./UserAvatart";

type UserType = {
  fullName: String;
  username: String;
};

export default function Posts({ user }: { user: UserType }) {
  const description = true;
  const image = true;

  return (
    <div>
      <div className='flex p-2'>
        <UserAvatar size={"small"} />
        <div>
          <p className='font-semibold text-lg'>{user?.fullName}</p>
          <p className='text-gray-400'>@{user?.username}</p>
        </div>
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
