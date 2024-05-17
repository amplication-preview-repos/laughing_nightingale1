import { SortOrder } from "../../util/SortOrder";

export type FriendRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  requester?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
