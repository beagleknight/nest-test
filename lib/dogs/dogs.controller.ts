import { Controller } from 'nest.js';
import { MessagePattern } from 'nest.js/microservices';

@Controller()
export class DogsController {
  @MessagePattern({ cmd: 'woof' })
  list(_, respond) {
    respond(null, [
      {
        name: "Boira",
        breed: "Beagle"
      }
    ]);
  }
}