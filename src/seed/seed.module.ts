import { Module } from '@nestjs/common';
import { seedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [SeedController],
  providers: [seedService],
  imports:[
    ProductsModule
  ]
})
export class SeedModule {}
