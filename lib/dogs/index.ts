import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from 'nest.js';
import { ApplicationModule } from './dogs.module';

const app = NestFactory.createMicroservice(ApplicationModule, { port: 3002 });
app.listen(() => console.log('Dogs Microservice is listening on port 3002'));
