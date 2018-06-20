import { TestBed, async, inject } from '@angular/core/testing';

import { AlwaysFalseGuard } from './always-false.guard';

describe('AlwaysFalseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysFalseGuard]
    });
  });

  it('should ...', inject([AlwaysFalseGuard], (guard: AlwaysFalseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
