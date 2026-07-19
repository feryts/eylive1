export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#120021] text-white p-6">
      <h1 className="text-3xl font-bold">🏠 EyLive</h1>

      <p className="mt-2 text-purple-200">
        Hoş geldin!
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl bg-white/10 p-4">
          🎙️ Türkiye Sohbet
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          🎵 Müzik Keyfi
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          🎮 Oyun Dünyası
        </div>

        <div className="rounded-2xl bg-white/10 p-4">
          ❤️ Arkadaşlık
        </div>
      </div>
    </main>
  );
}
