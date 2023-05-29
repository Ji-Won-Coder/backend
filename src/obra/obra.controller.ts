import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObraService } from './obra.service';
import { CreateObraDto } from './dto/create-obra.dto';
import { UpdateObraDto } from './dto/update-obra.dto';

@Controller('obra')
export class ObraController {
  constructor(private readonly obraService: ObraService) {}

  @Post()
  create(@Body() createObraDto: CreateObraDto) {
    return this.obraService.create(createObraDto);
  }

  @Get()
  findAll() {
    return this.obraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.obraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObraDto: UpdateObraDto) {
    return this.obraService.update(+id, updateObraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.obraService.remove(+id);
  }
}
