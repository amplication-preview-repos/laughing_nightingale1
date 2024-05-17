/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FriendService } from "../friend.service";
import { FriendCreateInput } from "./FriendCreateInput";
import { Friend } from "./Friend";
import { FriendFindManyArgs } from "./FriendFindManyArgs";
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { FriendUpdateInput } from "./FriendUpdateInput";

export class FriendControllerBase {
  constructor(protected readonly service: FriendService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Friend })
  async createFriend(@common.Body() data: FriendCreateInput): Promise<Friend> {
    return await this.service.createFriend({
      data: data,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Friend] })
  @ApiNestedQuery(FriendFindManyArgs)
  async friends(@common.Req() request: Request): Promise<Friend[]> {
    const args = plainToClass(FriendFindManyArgs, request.query);
    return this.service.friends({
      ...args,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Friend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async friend(
    @common.Param() params: FriendWhereUniqueInput
  ): Promise<Friend | null> {
    const result = await this.service.friend({
      where: params,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Friend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFriend(
    @common.Param() params: FriendWhereUniqueInput,
    @common.Body() data: FriendUpdateInput
  ): Promise<Friend | null> {
    try {
      return await this.service.updateFriend({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
          user1: true,
          user2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Friend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFriend(
    @common.Param() params: FriendWhereUniqueInput
  ): Promise<Friend | null> {
    try {
      return await this.service.deleteFriend({
        where: params,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
          user1: true,
          user2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
