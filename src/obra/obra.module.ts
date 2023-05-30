import { Module } from '@nestjs/common';
import { ObraService } from './obra.service';
import { ObraController } from './obra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ObraController],
  providers: [ObraService],
  imports:[
    TypeOrmModule.forFeature([ObraModule])
  ],
  exports:[
    ObraService,
    TypeOrmModule

  ]
})
export class ObraModule {}
