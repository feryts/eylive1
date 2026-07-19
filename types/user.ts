export type UserRole =
  | "user"
  | "vip"
  | "publisher"
  | "moderator"
  | "admin"
  | "super_admin";

export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;

  level: number;
  vip: number;

  coins: number;
  diamonds: number;

  role: UserRole;

  gameAccess: boolean;

  publisher: boolean;

  online: boolean;
}
