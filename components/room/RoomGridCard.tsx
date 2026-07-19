type Props = {
  title: string;
  category: string;
  users: number;
  image: string;
};

export default function RoomGridCard({
  title,
  category,
  users,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#221235] shadow-lg">

      <div
        className="relative h-44 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-bold">
          {category}
        </div>

        <div className="absolute bottom-3 left-3 flex -space-x-2">
          <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-300"></div>
          <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-400"></div>
          <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-500"></div>
        </div>

        <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2 py-1 text-xs">
          👥 {users}
        </div>
      </div>

      <div className="p-3">
        <h2 className="truncate text-base font-bold text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
