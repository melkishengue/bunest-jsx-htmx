import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    return 'This is the page 2';
  }

  getTime(): string {
    return new Date().toISOString();
  }
}
