import Header from "@/components/home/Header";
import SearchBar from "@/components/home/SearchBar";
import HomeBanner from "@/components/home/HomeBanner";
import Categories from "@/components/home/Categories";
import RoomCard from "@/components/home/RoomCard";
import BottomNav from "@/components/navigation/BottomNav";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120021] via-[#1b0038] to-[#090011] text-white pb-28">
      <div className="p-6">

        <Header />

        <SearchBar />

        <HomeBanner />

        <Categories />

        <h2 className="mb-4 text-2xl font-bold">
          🔥 Popüler Odalar
        </h2>

        <div className="grid grid-cols-1 gap-5">

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

      </div>

      <BottomNav />
    </main>
  );
}
