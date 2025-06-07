import { Controller, Get, Query , Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('name') name:string): string {
    return this.appService.getHello(name); 
  }
  @Put()
  UpdateFlow(@Body() body: {message: string }){
    if(message){
      return 'OK';
    }
    return 'INVALID';
  }
}
