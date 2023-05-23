import { Controller, Get,} from '@nestjs/common';
import { seedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: seedService) {}

    @Get()
    executeSeed(){
     return this.seedService.runSeed()
    }

    private async inserNewProducts(){

    }
  }