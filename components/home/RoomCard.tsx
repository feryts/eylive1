import { Room } from "@/types/room";

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  return (
    <div className="mb-5 overflow-hidden rounded-3xl bg-[#211135] shadow-lg">

      <div className="h-44 bg-gradient-to-r from-fuchsia-700 to-violet-700" />

      <div className="p-4">

        <div className="mb-2 flex items-center justify-between">

          <h2 className="text-lg font-bold text-white">
            {room.title}
          </h2>

          <span className="rounded-full bg-green-600 px-2 py-1 text-xs">
            CANLI
          </span>

        </div>

        <p className="text-sm text-purple-300">
          {room.category}
        </p>

        <div className="mt-4 flex justify-between text-sm text-purple-200">

          <span>👥 {room.current_users}</span>

          <span>🎤 {room.max_mics}</span>

        </div>

      </div>

    </div>
  );
}
