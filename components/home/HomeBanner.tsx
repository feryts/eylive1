export default function HomeBanner() {
  return (
    <div className="mx-4 mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-700 p-6 text-white shadow-xl">
      <p className="text-sm opacity-80">EyLive</p>

      <h2 className="mt-2 text-2xl font-bold">
        Hoş Geldin 👋
      </h2>

      <p className="mt-2 text-sm opacity-90">
        Popüler odalara katıl, arkadaş edin ve hediyeler kazan.
      </p>

      <button className="mt-5 rounded-full bg-white px-5 py-2 font-semibold text-purple-700">
        Şimdi Keşfet
      </button>
    </div>
  );
}
