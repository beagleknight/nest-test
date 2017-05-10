import { Module } from 'nest.js';
import { DogsController } from './dogs.controller';

@Module({
  controllers: [ DogsController ]
})
export class ApplicationModule {}
