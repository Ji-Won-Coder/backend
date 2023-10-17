import { Controller, Get } from '@nestjs/common';
import { SocketController } from './socket/socket.controller';

@Controller()
export class AppController {
  constructor(private readonly socketController: SocketController) {}

  @Get('/init')
  getHella(): string {
    this.socketController.server.emit('message','jejejjeej salio bien');
    return 'Mensage enviado con exito, repeat good';
  }
}
