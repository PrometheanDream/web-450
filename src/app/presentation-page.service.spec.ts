import { TestBed, inject } from '@angular/core/testing';

import { PresentationPageService } from './presentation-page.service';

describe('PresentationPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresentationPageService]
    });
  });

  it('should be created', inject([PresentationPageService], (service: PresentationPageService) => {
    expect(service).toBeTruthy();
  }));
});
