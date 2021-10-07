import { Module } from '@nestjs/common';
import { PostsModule } from './module/posts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_POST) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'qwerty1',
      database: process.env.POSTGRES_DATABASE || 'nestjs',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')]
    }),
    PostsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
