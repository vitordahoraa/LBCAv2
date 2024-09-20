import { TestBed } from '@angular/core/testing';

import { HelpDonateService } from './help-donate.service';

describe('HelpDonateService', () => {
  let service: HelpDonateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpDonateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
