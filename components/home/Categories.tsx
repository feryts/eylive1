const list = [
  "🔥 Sıcak",
  "🆕 Yeni",
  "🎤 Sohbet",
  "🎵 Müzik",
  "🎉 Parti",
  "🌍 Global",
  "❤️ Arkadaş",
  "🎮 Oyun"
];

export default function Categories() {
  return (
    <div className="mb-6 flex gap-3 overflow-x-auto">

      {list.map((item) => (
        <button
          key={item}
          className="rounded-full bg-white/10 px-5 py-3 whitespace-nowrap text-white"
        >
          {item}
        </button>
      ))}

    </div>
  );
}
