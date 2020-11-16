import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    this.lastlog = message;
  }
}
