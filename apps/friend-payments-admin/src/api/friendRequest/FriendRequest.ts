export type FriendRequest = {
  createdAt: Date;
  id: string;
  recipient: string | null;
  requester: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
