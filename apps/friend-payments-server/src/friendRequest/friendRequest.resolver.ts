import * as graphql from "@nestjs/graphql";
import { FriendRequestResolverBase } from "./base/friendRequest.resolver.base";
import { FriendRequest } from "./base/FriendRequest";
import { FriendRequestService } from "./friendRequest.service";

@graphql.Resolver(() => FriendRequest)
export class FriendRequestResolver extends FriendRequestResolverBase {
  constructor(protected readonly service: FriendRequestService) {
    super(service);
  }
}
