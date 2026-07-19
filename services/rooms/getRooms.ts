import { supabase } from "@/lib/supabase";

export async function getRooms() {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("is_active", true)
    .order("current_users", { ascending: false });

  return { data, error };
}
