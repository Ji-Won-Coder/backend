import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
//import{ValidationPipe} from '@nestjs/common'
//import { Express } from 'express';


async function inicio() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);

  //app.setGlobalPrefix('api');
  //app.useGlobalPipes( 
  //  new ValidationPipe({
  //  whitelist: true,
  //  forbidNonWhitelisted: true,
  //   
  //  })
  // );
}

inicio();
