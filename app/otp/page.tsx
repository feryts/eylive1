"use client";

import { useState } from "react";

export default function OtpPage() {
  const [code, setCode] = useState("");

  async function verifyCode() {
    if (code.length !== 6) {
      alert("6 haneli kod giriniz.");
      return;
    }

    alert("Bir sonraki adımda Supabase doğrulaması eklenecek.");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120021] via-[#1b0038] to-[#090011] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">

        <h1 className="text-white text-3xl font-bold mb-6">
          SMS Doğrulama
        </h1>

        <input
          type="text"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123456"
          className="w-full rounded-2xl bg-white/10 border border-white/20 p-4 text-white text-center text-2xl tracking-[8px] outline-none"
        />

        <button
          onClick={verifyCode}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 py-4 text-white font-bold"
        >
          Doğrula
        </button>

      </div>
    </main>
  );
}
