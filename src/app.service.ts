import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name:string): string {
    return `Hello, ${name}!, Let"s run build! OK, Updated`;
  }
}
