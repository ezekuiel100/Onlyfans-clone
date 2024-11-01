import UserAvatar from "../UserAvatar";
import UserInfo from "../UserInfo";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type PostProps = {
  user: { fullName: string | null; username: string | null };
  date: string;
};

export default function PostHeader({ user, date }: PostProps) {
  const data = new Date(date);
  const formattedDate = formatDistanceToNow(data, { locale: ptBR });

  return (
    <div className="flex p-2 justify-between ">
      <div className="flex gap-1">
        <UserAvatar size={"small"} />

        <UserInfo user={user} />
      </div>

      <span className="text-gray-400 hover:text-blue-400 cursor-pointer hover:underline">
        {formattedDate}
      </span>
    </div>
  );
}
