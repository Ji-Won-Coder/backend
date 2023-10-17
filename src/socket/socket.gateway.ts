import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';


@WebSocketGateway()
export class SocketGateway {

  @WebSocketServer() server: Server;
  
  //@SubscribeMessage ('message')
  //handleMessage(@MessageBody() payload: any): string {
  //  return 'Hello world!';
  //}
}
