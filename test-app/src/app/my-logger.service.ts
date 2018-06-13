import { Injectable } from '@angular/core';

@Injectable()
export class MyLoggerService {

  constructor() { }

  public escribir(text: string): void {
    console.log('###' + text);
  }

}
