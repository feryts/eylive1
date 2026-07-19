export interface WalletTransaction {
  id: string;

  userId: string;

  type:
    | "purchase"
    | "gift"
    | "game_win"
    | "game_lose"
    | "admin";

  amount: number;

  createdAt: string;
}
