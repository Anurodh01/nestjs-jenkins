import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name:string): string {
    return `Hello, ${name}!, Let"s run build! OK, Updated`;
  }
  postMessage(message: string): string {
    return `Received message: ${message}`;
  }
  getUser(username: string): string {
    return `User: ${username}`;
  }
}
