import Header from "@/components/home/Header";
import UserInfoCard from "@/components/home/UserInfoCard";
import SearchBar from "@/components/home/SearchBar";
import HomeBanner from "@/components/banner/HomeBanner";
import Categories from "@/components/home/Categories";
import RoomCard from "@/components/home/RoomCard";
import BottomNav from "@/components/navigation/BottomNav";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d001c] via-[#1b0038] to-[#090011] text-white pb-28">

      <div className="mx-auto max-w-md px-4 pt-5">

        <Header />

        <UserInfoCard />

        <SearchBar />

        <HomeBanner />

        <Categories />

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            🔥 Trend Odalar
          </h2>

          <button className="text-purple-300">
            Tümü
          </button>
        </div>

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
          title="Arkadaşlık"
          users={176}
          likes="7.3K"
        />

        <RoomCard
          title="Global Chat"
          users={312}
          likes="15K"
        />

      </div>

      <BottomNav />

    </main>
  );
}
