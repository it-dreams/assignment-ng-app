import { TestBed } from '@angular/core/testing';

import { Timer2Service } from './timer2.service';

describe('Timer2Service', () => {
  let service: Timer2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Timer2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
