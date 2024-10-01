import { Injectable } from '@nestjs/common';
import { GetTextDto } from './dtos/get-text.dto';

@Injectable()
export class AppService {
  getHello(): GetTextDto {
    return { text: 'Hello World!' };
  }
}
