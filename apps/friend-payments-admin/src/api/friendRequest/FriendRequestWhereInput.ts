import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FriendRequestWhereInput = {
  id?: StringFilter;
  recipient?: StringNullableFilter;
  requester?: StringNullableFilter;
  status?: "Option1";
};
