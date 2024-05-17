import { FriendRequest as TFriendRequest } from "../api/friendRequest/FriendRequest";

export const FRIENDREQUEST_TITLE_FIELD = "recipient";

export const FriendRequestTitle = (record: TFriendRequest): string => {
  return record.recipient?.toString() || String(record.id);
};
