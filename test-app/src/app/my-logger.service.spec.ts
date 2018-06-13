import { TestBed, inject } from '@angular/core/testing';

import { MyLoggerService } from './my-logger.service';

describe('MyLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLoggerService]
    });
  });

  it('should be created', inject([MyLoggerService], (service: MyLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
