import { Controller, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ObraModule } from './obra/obra.module';
import { SocketModule } from './socket/socket.module';
import { SocketController } from './socket/socket.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import {WebsocketsMiddleware} from './websockets.controller'

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
    SocketModule,
  ],
  controllers:[AppController],
  providers:[SocketController],

  
})


export class AppModule {
  //configure(consumer: MiddlewareConsumer) {
  //  consumer
  //    .apply(WebsocketsMiddleware)
  //    .forRoutes('*');
  //}
}
