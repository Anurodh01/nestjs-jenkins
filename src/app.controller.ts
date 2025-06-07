import { Body, Controller, Get, Post, Query, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('name') name:string): string {
    return this.appService.getHello(name); 
  }
  @Post()
  postMessage(@Body() body: { message: string }): string {
    return this.appService.postMessage(body.message);
  }
  @Get('health')
  healthCheck(): string {
    return 'OK';
  }
  @Put()
  UpdateFlow(@Body() body: {message: string }){
    if(body){
      return 'OK';
    }
    return 'INVALID';
  }
}
