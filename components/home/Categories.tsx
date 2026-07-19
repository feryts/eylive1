const items = [
  "💬 Sohbet",
  "🎵 Müzik",
  "❤️ Arkadaş",
  "🎮 Oyun",
  "🌍 Global",
  "🎉 Etkinlik",
];

export default function Categories() {
  return (
    <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
      {items.map((item) => (
        <button
          key={item}
          className="whitespace-nowrap rounded-full bg-white/10 px-5 py-3 text-white"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
