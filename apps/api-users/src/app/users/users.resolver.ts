import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from '../graphql.schema';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('allUsers')
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @Query('selectedUser')
  async getUserById(@Args('id') id: number): Promise<User> {
    return await this.usersService.findOneById(id);
  }
}
