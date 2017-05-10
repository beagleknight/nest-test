import { WebSocketGateway, OnGatewayInit, SubscribeMessage } from 'nest.js/websockets';

@WebSocketGateway({ port: 3001, namespace: 'users' })
// @WebSocketGateway({
//     port: 2000,
//     middlewares: [ ChatMiddleware ],
// })
export class UsersGateway implements OnGatewayInit {
  afterInit(server) {}
  handleConnection(client) {}
  handleDisconnect(client) {}

  @SubscribeMessage('drop')
  handleDropMessage(sender, data) {
    // sender is a native socket.io client object
  }
}
