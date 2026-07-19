export interface Room {
  id: string;

  title: string;

  description: string | null;

  category: string;

  cover_url: string | null;

  background_url: string | null;

  current_users: number;

  max_users: number;

  max_mics: number;

  is_locked: boolean;

  allow_games: boolean;

  allow_gifts: boolean;

  is_active: boolean;

  created_at: string;
}
