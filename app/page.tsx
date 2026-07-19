import Header from "@/components/home/Header";
import SearchBar from "@/components/home/SearchBar";
import RoomCard from "@/components/home/RoomCard";
import BottomNav from "@/components/navigation/BottomNav";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120021] via-[#1b0038] to-[#090011] text-white pb-28">

      <div className="p-6">

        <Header />

        <SearchBar />

        <h2 className="text-xl font-bold mb-4">
          🔥 Popüler Odalar
        </h2>

        <RoomCard
          title="Türkiye Sohbet"
          users={125}
          likes="4.8K"
        />

        <RoomCard
          title="Müzik Keyfi"
          users={98}
          likes="2.1K"
        />

        <RoomCard
          title="Oyun Dünyası"
          users={84}
          likes="1.5K"
        />

        <RoomCard
          title="Arkadaşlık"
          users={176}
          likes="7.3K"
        />

      </div>

      <BottomNav />

    </main>
  );
}