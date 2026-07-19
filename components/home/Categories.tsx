const items = [
  "🔥 Popüler",
  "🎵 Müzik",
  "🎉 Parti",
  "🌍 Global",
  "🎙 Sohbet",
  "💎 VIP",
];

export default function Categories() {
  return (
    <div className="mb-5 flex gap-3 overflow-x-auto px-4">
      {items.map((item) => (
        <button
          key={item}
          className="whitespace-nowrap rounded-full bg-purple-900 px-4 py-2 text-sm text-white"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
