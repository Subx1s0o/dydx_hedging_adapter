import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('ping')
  async ping() {
    return 'pong';
  }
}
