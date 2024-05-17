import { Friend as TFriend } from "../api/friend/Friend";

export const FRIEND_TITLE_FIELD = "user1";

export const FriendTitle = (record: TFriend): string => {
  return record.user1?.toString() || String(record.id);
};
