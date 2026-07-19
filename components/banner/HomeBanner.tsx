export default function HomeBanner() {
  return (
    <div className="mb-6 h-40 rounded-3xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-700 p-6">

      <div className="flex h-full flex-col justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            EyLive Festival
          </h2>

          <p className="mt-2 text-purple-100">
            Katıl, arkadaş edin ve ödüller kazan.
          </p>

        </div>

        <button className="w-36 rounded-full bg-white py-3 font-bold text-purple-700">
          Katıl
        </button>

      </div>

    </div>
  );
}
