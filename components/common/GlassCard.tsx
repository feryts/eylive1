import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-xl p-5 shadow-2xl">
      {children}
    </div>
  );
}
