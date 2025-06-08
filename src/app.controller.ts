import { Body, Controller, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
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
  @Get("user/:username")
  getUser(@Param('username') username: string): string {
    return this.appService.getUser(username);
  }
  @Put()
  UpdateFlow(@Body() body: {message: string }){
    if(body){
      return 'OK';
    }
    return 'INVALID';
  }
  @Delete()
  deleteFlow(){
    return 'Deleted';
  }
}
