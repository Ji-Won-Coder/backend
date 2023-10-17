import { WebSocketGateway, OnGatewayConnection,OnGatewayDisconnect,WebSocketServer } from "@nestjs/websockets";
import {Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketController implements OnGatewayConnection, OnGatewayDisconnect{

@WebSocketServer() server: Server;

handleConnection(client:Socket) {
    console.log(`cliente Connection: ${client.id}`);
    
}
//`
handleDisconnect(client:Socket) {
    console.log(`client Disconnect: ${client.id}`);
}

//metodos  para manejar mis eventos

}