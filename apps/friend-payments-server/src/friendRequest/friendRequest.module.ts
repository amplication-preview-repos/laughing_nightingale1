import { Module } from "@nestjs/common";
import { FriendRequestModuleBase } from "./base/friendRequest.module.base";
import { FriendRequestService } from "./friendRequest.service";
import { FriendRequestController } from "./friendRequest.controller";
import { FriendRequestResolver } from "./friendRequest.resolver";

@Module({
  imports: [FriendRequestModuleBase],
  controllers: [FriendRequestController],
  providers: [FriendRequestService, FriendRequestResolver],
  exports: [FriendRequestService],
})
export class FriendRequestModule {}
