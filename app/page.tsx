import Logo from "@/components/logo/Logo";
import PhoneInput from "@/components/ui/PhoneInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GoogleButton from "@/components/ui/GoogleButton";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120021] via-[#1b0038] to-[#090011] flex items-center justify-center p-6">
      <GlassCard>
        <Logo />

        <div className="space-y-5 mt-10">
          <PhoneInput />

          <PrimaryButton title="SMS Kodu Gönder" />

          <GoogleButton />
        </div>

        <Footer />
      </GlassCard>
    </main>
  );
}