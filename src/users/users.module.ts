import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Publication } from 'src/publications/entities/publication.entity';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    TypeOrmModule.forFeature([User,Publication])
  ],
  exports:[
    UsersService,
    TypeOrmModule,
  ]
})
export class UsersModule {}
