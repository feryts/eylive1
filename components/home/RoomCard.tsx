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

      <div className="relative h-44 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-700">

        <div className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
          🔴 CANLI
        </div>

        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs">
          👥 {users}
        </div>

        <div className="absolute bottom-3 left-3 flex -space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=11"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/40?img=12"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/40?img=13"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/40?img=14"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
        </div>

      </div>

      <div className="p-4">

        <h3 className="text-lg font-bold">{title}</h3>

        <p className="mt-2 text-sm text-gray-300">
          Eğlence • Sohbet • Müzik
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-pink-400 font-semibold">
            ❤️ {likes}
          </span>

          <button className="rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-semibold hover:bg-fuchsia-500">
            Katıl
          </button>

        </div>

      </div>

    </div>
  );
}
