export type MessageType =
  | "text"
  | "image"
  | "voice"
  | "gift"
  | "system";

export interface Message {
  id: string;

  senderId: string;
  receiverId?: string;

  roomId?: string;

  type: MessageType;

  content: string;

  createdAt: string;

  isRead: boolean;
}
