import { Controller, Get, Response, Param, Post, Body, HttpStatus } from 'nest.js';
import { UsersService } from "./users.service";
import { Client, ClientProxy } from 'nest.js/microservices';
import { Transport } from 'nest.js/common/enums';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/of";

@Controller('users')
export class UsersController {
  @Client({ transport: Transport.TCP, port: 3002 })
  client: ClientProxy;

  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(@Response() res) {
    const users = await this.usersService.getAllUsers();

    const dogs = await this.client.send({ cmd: "woof" }, [])
                  .catch((err) => Observable.of(err))
                  .toPromise();

    res.status(HttpStatus.OK).json(dogs);
  }

  @Get('/:id')
  async getUser(@Response() res, @Param('id') id) {
    const user = await this.usersService.getUser(+id);
    res.status(HttpStatus.OK).json(user);
  }

  @Post()
  async addUser(@Response() res, @Body('user') user) {
    const msg = await this.usersService.getUser(user);
    res.status(HttpStatus.CREATED).json(msg);
  }
}
