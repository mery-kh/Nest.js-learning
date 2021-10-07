import { Module } from '@nestjs/common';
import PostsController from '../controller/posts.controller';
import PostsService from '../service/posts.service';
import Post from '../entity/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {}