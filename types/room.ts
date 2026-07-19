export interface Room {
  id: string;

  title: string;

  cover: string;

  category: string;

  hostId: string;

  users: number;

  likes: number;

  gifts: number;

  micCount: number;

  locked: boolean;

  password: boolean;

  background: string;
}
