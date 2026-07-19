export default function HomeBanner() {
  return (
    <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-700 p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white">
        🎉 Hoş Geldin
      </h2>

      <p className="mt-2 text-purple-100">
        Günlük görevlerini tamamla ve ödüller kazan.
      </p>

      <button className="mt-5 rounded-2xl bg-white px-5 py-3 font-bold text-purple-700">
        Etkinlikleri Gör
      </button>

    </div>
  );
}

