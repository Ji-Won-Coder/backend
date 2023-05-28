import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import{ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //los endpoints seran validados aqui
app.useGlobalPipes(new ValidationPipe({transform:true}))

app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
