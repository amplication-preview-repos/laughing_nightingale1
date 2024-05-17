import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FriendWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
