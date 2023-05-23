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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeedDto: UpdateSeedDto) {
    return this.seedService.update(+id, updateSeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seedService.remove(+id);
  }
}
