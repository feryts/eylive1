export default function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold text-white">EyLive</h1>
        <p className="text-sm text-purple-200">
          Hoş geldin 👋
        </p>
      </div>

      <div className="flex gap-3">
        <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
          🔔
        </button>

        <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
          💬
        </button>
      </div>
    </header>
  );
}
