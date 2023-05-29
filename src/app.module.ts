import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ObraModule } from './obra/obra.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, 
      port: +process.env.DB_PORT, //convierto el puerto en numero con el + porque el puerto es un numero
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      autoLoadEntities: true, //cargue de las entidades 
      synchronize: true, //sincriniza 
    }),
    ProductsModule,
    CommonModule,
    SeedModule,
    ObraModule,
  ],
  
})
export class AppModule {}
