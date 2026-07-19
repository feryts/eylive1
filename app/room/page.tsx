export default function RoomPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#10001d] via-[#22003f] to-[#090011] text-white">

      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <button className="text-2xl">⬅️</button>

        <div className="text-center">
          <h1 className="text-2xl font-bold">
            🇹🇷 Türkiye Sohbet
          </h1>

          <p className="text-sm text-purple-300">
            Oda ID : 100245
          </p>
        </div>

        <button className="text-2xl">
          ⚙️
        </button>
      </div>

      {/* Host */}
      <div className="flex flex-col items-center mt-6">

        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-5xl">
          👑
        </div>

        <h2 className="mt-4 text-2xl font-bold">
          Host
        </h2>

        <span className="mt-2 rounded-full bg-red-600 px-4 py-1 text-sm">
          🔴 CANLI
        </span>

      </div>

      {/* Mikrofonlar */}
      <div className="grid grid-cols-4 gap-5 p-6 mt-8">

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">
              🎤
            </div>

            <p className="mt-2 text-xs">
              Koltuk {index + 1}
            </p>
          </div>
        ))}

      </div>

      {/* Alt Menü */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#170028]">

        <div className="flex justify-around py-4">

          <button>💬</button>

          <button>🎁</button>

          <button>🎤</button>

          <button>😊</button>

          <button>🚪</button>

        </div>

      </div>

    </main>
  );
}
