import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetTextDto } from './dtos/get-text.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetTextDto {
    return this.appService.getHello();
  }
}
