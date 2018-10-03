import { TestBed, inject } from '@angular/core/testing';

import { QuizSelectionService } from './quiz-selection.service';

describe('QuizSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizSelectionService]
    });
  });

  it('should be created', inject([QuizSelectionService], (service: QuizSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
