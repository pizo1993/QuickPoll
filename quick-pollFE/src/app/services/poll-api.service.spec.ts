import { TestBed, inject } from '@angular/core/testing';
import { PollApiService } from './poll-api.service';

describe('PollApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollApiService]
    });
  });

  it('should be created', inject([PollApiService], (service: PollApiService) => {
    expect(service).toBeTruthy();
  }));
});
