import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './entities/publication.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService],
  imports: [ 
    TypeOrmModule.forFeature([Publication,User])

  ],
  exports:[
    PublicationsService,
    TypeOrmModule,
  ],
})
export class PublicationsModule {}
