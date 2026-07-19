"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendOtp } from "@/services/auth/login";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSendOtp() {
    if (!phone) {
      alert("Telefon numarası giriniz.");
      return;
    }

    setLoading(true);

    const { error } = await sendOtp(phone);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("SMS gönderildi.");
    router.push("/otp");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120021] via-[#1b0038] to-[#090011] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

        <div className="flex flex-col items-center mb-10">

          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 flex items-center justify-center text-4xl">
            🎤
          </div>

          <h1 className="text-white text-4xl font-bold mt-5">
            EyLive
          </h1>

          <p className="text-purple-200 mt-2">
            Voice • Connect • Shine
          </p>

        </div>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+905xxxxxxxxx"
          className="w-full rounded-2xl bg-white/10 border border-white/20 p-4 text-white placeholder:text-gray-300 outline-none"
        />

        <button
          onClick={handleSendOtp}
          disabled={loading}
          className="mt-5 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 py-4 text-white font-bold"
        >
          {loading ? "Gönderiliyor..." : "SMS Kodu Gönder"}
        </button>

        <button
          className="mt-4 w-full rounded-2xl bg-white py-4 font-bold text-black"
        >
          Google ile Devam Et
        </button>

      </div>
    </main>
  );
}
