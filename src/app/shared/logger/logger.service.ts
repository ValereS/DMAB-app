import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LogLevel } from '../enum/LogLevel.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private angularLog: LogLevel;

  constructor() {
    this.angularLog = environment.angularLogLevel;
  }

  trace( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.TRACE) {
      console.log('%c[TRACE] ', 'color: grey; font-weight: bold;', ...messages);
    }
  }

  debug( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.DEBUG) {
      console.log('%c[DEBUG] ', 'color: green; font-weight: bold;', ...messages);
    }
  }

  info( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.INFO) {
      console.log('%c[INFO] ', 'color: blue; font-weight: bold;', ...messages);
    }
  }

  log( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.LOG) {
      console.log('%c[LOG] ', 'color: cyan; font-weight: bold;', ...messages);
    }
  }

  warn( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.WARN) {
      console.log('%c[WARN] ', 'color: yellow; font-weight: bold;', ...messages);
    }
  }

  error( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.ERROR) {
      console.log('%c[ERROR] ', 'color: orange; font-weight: bold;', ...messages);
    }
  }

  fatal( ...messages: any[]): void {
    if (this.angularLog >= LogLevel.FATAL) {
      console.log('%c[ERROR] ', 'color: red; font-weight: bold;', ...messages);
    }
  }

}
