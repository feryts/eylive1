import { supabase } from "@/lib/supabase";

export async function getHome() {
  const { data: rooms } = await supabase
    .from("rooms")
    .select("*")
    .eq("is_active", true)
    .order("current_users", { ascending: false });

  return {
    rooms: rooms ?? [],
  };
}
