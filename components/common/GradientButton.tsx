import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GradientButton({
  children,
}: Props) {
  return (
    <button className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 py-4 font-bold text-white">
      {children}
    </button>
  );
}
