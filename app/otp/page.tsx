export default function OtpPage() {
  return (
    <main className="min-h-screen bg-[#120021] flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl">
        <h1 className="text-white text-3xl font-bold mb-6">
          SMS Doğrulama
        </h1>

        <input
          className="w-full rounded-xl p-4"
          placeholder="6 Haneli Kod"
        />

        <button className="mt-5 w-full rounded-xl bg-fuchsia-600 py-4 text-white font-bold">
          Doğrula
        </button>
      </div>
    </main>
  );
}
