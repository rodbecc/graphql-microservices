import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/api-users/src/app/graphql.schema.ts'),
        outputAs: 'class',
      },
      playground: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
