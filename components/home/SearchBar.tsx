export default function SearchBar() {
  return (
    <div className="mb-5">

      <input
        placeholder="Oda, kullanıcı veya ID ara..."
        className="w-full rounded-3xl border border-white/10 bg-white/10 p-5 text-white placeholder:text-gray-300 outline-none backdrop-blur-xl"
      />

    </div>
  );
}
