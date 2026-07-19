interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  title,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl py-4 font-bold text-white bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:opacity-90 transition"
    >
      {title}
    </button>
  );
}

