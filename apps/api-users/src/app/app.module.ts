import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'apps/api-users/src/app/graphql.schema.ts'),
      outputAs: 'class',
    },
    // TODO: Check env and enable or disable playground accordingly
    playground: true,
  }), UsersModule],
})
export class AppModule {}
