export default function UserInfoCard() {
  return (
    <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#C026D3] p-5 shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="h-16 w-16 rounded-full border-2 border-white bg-white/20"></div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Misafir
            </h2>

            <p className="text-sm text-purple-100">
              ID : 1000001
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="font-bold text-yellow-300">
            🪙 125000
          </p>

          <p className="text-cyan-300">
            💎 500
          </p>

        </div>

      </div>

    </div>
  );
}
