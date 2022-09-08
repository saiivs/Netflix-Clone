import { TestBed } from '@angular/core/testing';

import { MovieServsService } from './movie-servs.service';

describe('MovieServsService', () => {
  let service: MovieServsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
