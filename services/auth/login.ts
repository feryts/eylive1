import { supabase } from "@/lib/supabase";

export async function sendOtp(phone: string) {
  return await supabase.auth.signInWithOtp({
    phone,
  });
}
