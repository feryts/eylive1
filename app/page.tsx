export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120021] via-[#1b0038] to-[#090011] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 flex items-center justify-center text-4xl shadow-lg">
            🎤
          </div>

          <h1 className="text-white text-4xl font-bold mt-5">
            EyLive
          </h1>

          <p className="text-purple-200 mt-2 text-center">
            Voice • Connect • Shine
          </p>
        </div>

        <div className="space-y-5">

          <input
            type="tel"
            placeholder="Telefon Numarası"
            className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder:text-gray-300 outline-none"
          />

          <button
            className="w-full rounded-2xl py-4 font-bold text-white bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:opacity-90 transition"
          >
            SMS Kodu Gönder
          </button>

          <button
            className="w-full rounded-2xl py-4 font-bold bg-white text-black hover:bg-gray-200 transition"
          >
            Google ile Devam Et
          </button>

        </div>

        <div className="mt-8 text-center text-xs text-gray-300">
          Devam ederek
          <span className="text-fuchsia-400">
            {" "}Kullanım Koşulları{" "}
          </span>
          ve
          <span className="text-fuchsia-400">
            {" "}Gizlilik Politikasını{" "}
          </span>
          kabul etmiş olursunuz.
        </div>

      </div>
    </main>
  );
}
