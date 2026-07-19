import { getHome } from "@/services/home/getHome";

export async function useHome() {
  return await getHome();
}
