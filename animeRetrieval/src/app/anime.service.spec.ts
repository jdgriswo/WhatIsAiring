import { TestBed } from '@angular/core/testing';

import { AnimeService } from './anime.service';

describe('AnimeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeService = TestBed.get(AnimeService);
    expect(service).toBeTruthy();
  });
});
