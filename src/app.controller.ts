import { Controller, Get, Query, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query) {
    console.log(query);
    return query['hub.challenge'];
  }
  @Post()
  handlePost(@Param() param) {
    console.log(param)
  }
}
