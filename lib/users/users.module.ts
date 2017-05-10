import { Module, MiddlewaresConsumer } from 'nest.js';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthMiddleware } from "./auth.middleware";
import { UsersGateway } from "./users.gateway";

@Module({
    controllers: [ UsersController ],
    components: [ UsersService, UsersGateway ]
})
export class UsersModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UsersController);
  }
}