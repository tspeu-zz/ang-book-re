import { TestBed } from '@angular/core/testing';

import { GeeralHttpInterceptorService } from './geeral-http-interceptor.service';

describe('GeeralHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeeralHttpInterceptorService = TestBed.get(GeeralHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
