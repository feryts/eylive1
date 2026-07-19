export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#120021]/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-md items-center justify-around py-4">

        <button className="flex flex-col items-center text-fuchsia-400">
          <span className="text-2xl">🏠</span>
          <span className="text-xs">Ana Sayfa</span>
        </button>

        <button className="flex flex-col items-center text-white">
          <span className="text-2xl">🔍</span>
          <span className="text-xs">Keşfet</span>
        </button>

        <button className="relative -mt-8 h-16 w-16 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-3xl shadow-2xl">
          🎙️
        </button>

        <button className="flex flex-col items-center text-white">
          <span className="text-2xl">💬</span>
          <span className="text-xs">Mesaj</span>
        </button>

        <button className="flex flex-col items-center text-white">
          <span className="text-2xl">👤</span>
          <span className="text-xs">Profil</span>
        </button>

      </div>

    </nav>
  );
}

