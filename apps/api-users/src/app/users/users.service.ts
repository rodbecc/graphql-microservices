import { Injectable } from '@nestjs/common';

import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
    { id: 4, name: 'ddd' },
    { id: 5, name: 'eee' },
  ];

  async getAll(): Promise<User[]> {
    return await this.users;
  }

  async findOneById(id: number): Promise<User> {
    return await this.users.find(user => user.id === id);
  }
}
