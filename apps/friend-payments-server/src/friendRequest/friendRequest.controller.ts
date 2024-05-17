import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FriendRequestService } from "./friendRequest.service";
import { FriendRequestControllerBase } from "./base/friendRequest.controller.base";

@swagger.ApiTags("friendRequests")
@common.Controller("friendRequests")
export class FriendRequestController extends FriendRequestControllerBase {
  constructor(protected readonly service: FriendRequestService) {
    super(service);
  }
}
