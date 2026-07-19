import Header from "@/components/home/Header";
import UserInfoCard from "@/components/home/UserInfoCard";
import SearchBar from "@/components/home/SearchBar";
import HomeBanner from "@/components/banner/HomeBanner";
import Categories from "@/components/home/Categories";
import RoomCard from "@/components/home/RoomCard";
import BottomNav from "@/components/navigation/BottomNav";

import { getRooms } from "@/services/rooms/getRooms";

export default async function HomePage() {
  const rooms = await getRooms();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#090011] via-[#18002f] to-[#090011] pb-28">

      <div className="mx-auto max-w-md px-4 pt-5">

        <Header />

        <UserInfoCard />

        <SearchBar />

        <HomeBanner />

        <Categories />

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            🔥 Trend Odalar
          </h2>

          <button className="text-purple-300">
            Tümünü Gör
          </button>

        </div>

        <div className="space-y-5">

          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>

      </div>

      <BottomNav />

    </main>
  );
}
