export default function SearchBar() {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Oda veya yayıncı ara..."
        className="w-full rounded-2xl bg-white/10 border border-white/10 p-4 text-white placeholder:text-gray-300 outline-none"
      />
    </div>
  );
}

