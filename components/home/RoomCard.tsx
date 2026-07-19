type Props = {
  title: string;
  users: number;
  likes: string;
};

export default function RoomCard({
  title,
  users,
  likes,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#24103d] shadow-lg">

      <div className="relative h-40 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-700">

        <div className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
          🔴 CANLI
        </div>

        <div className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs">
          👥 {users}
        </div>

      </div>

      <div className="p-4">

        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-300">
          Eğlence • Sohbet • Müzik
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span>❤️ {likes}</span>

          <button className="rounded-full bg-fuchsia-600 px-4 py-2 text-sm font-semibold">
            Katıl
          </button>

        </div>

      </div>

    </div>
  );
}
