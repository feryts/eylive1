export default function UserInfoCard() {
  return (
    <div className="mb-6 rounded-3xl bg-gradient-to-r from-violet-700 to-fuchsia-600 p-5 shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
            👤
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Misafir
            </h2>

            <p className="text-sm text-purple-100">
              ID: 1000001
            </p>
          </div>

        </div>

        <div className="text-right">

          <div className="text-yellow-300 font-bold">
            🪙 0
          </div>

          <div className="text-cyan-200">
            💎 0
          </div>

        </div>

      </div>

    </div>
  );
}
