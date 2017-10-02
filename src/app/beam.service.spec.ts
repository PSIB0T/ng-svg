import { TestBed, inject } from '@angular/core/testing';

import { BeamService } from './beam.service';

describe('BeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeamService]
    });
  });

  it('should ...', inject([BeamService], (service: BeamService) => {
    expect(service).toBeTruthy();
  }));
});
