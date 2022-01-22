import { TestBed } from '@angular/core/testing';

import { EwalletserviceService } from './ewalletservice.service';

describe('EwalletserviceService', () => {
  let service: EwalletserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EwalletserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
