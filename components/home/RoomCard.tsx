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
    <div className="mb-5 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            🎙️ {title}
          </h2>

          <p className="mt-2 text-sm text-purple-200">
            Herkese açık sesli oda
          </p>
        </div>

        <div className="text-5xl">
          🎤
        </div>

      </div>

      <div className="mt-5 flex justify-between text-sm text-purple-100">
        <span>👥 {users}</span>
        <span>❤️ {likes}</span>
        <span>🎁 25K</span>
      </div>

    </div>
  );
}
