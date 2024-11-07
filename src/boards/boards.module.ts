import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { Board } from './board.entity';
import { UsersModule } from '../users/users.module'; // UsersModule을 임포트

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]),
    UsersModule, // UsersModule 추가
  ],
  providers: [BoardsService],
  controllers: [BoardsController],
})
export class BoardsModule {}
