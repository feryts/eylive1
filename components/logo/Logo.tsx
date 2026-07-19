export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 flex items-center justify-center text-4xl shadow-lg">
        🎤
      </div>

      <h1 className="text-white text-4xl font-bold mt-5">
        EyLive
      </h1>

      <p className="text-purple-200 mt-2">
        Voice • Connect • Shine
      </p>
    </div>
  );
}
