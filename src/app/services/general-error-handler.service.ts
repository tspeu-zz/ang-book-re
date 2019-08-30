import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GeneralErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    throw new Error('ERROR PERSONALIZADO: ' + error);
  }

}
