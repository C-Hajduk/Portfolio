import { TestBed } from '@angular/core/testing';

import { BurgermenuService } from './burgermenu-service';

describe('BurgermenuService', () => {
  let service: BurgermenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgermenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
