import { TestBed } from '@angular/core/testing';

import { AnalyseMesuresService } from './analyse-mesures.service';

describe('AnalyseMesuresService', () => {
  let service: AnalyseMesuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyseMesuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
