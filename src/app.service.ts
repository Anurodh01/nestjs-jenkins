import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Anurodh!, Let"s run build! OK';
  }
}
