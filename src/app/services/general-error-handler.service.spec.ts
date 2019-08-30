import { TestBed } from '@angular/core/testing';

import { GeneralErrorHandlerService } from './general-error-handler.service';

describe('GeneralErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralErrorHandlerService = TestBed.get(GeneralErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
