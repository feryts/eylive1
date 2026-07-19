import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlassCard({ children }: Props) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
      {children}
    </div>
  );
}

