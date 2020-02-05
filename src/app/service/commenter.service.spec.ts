import { TestBed } from '@angular/core/testing';

import { CommenterService } from './commenter.service';

describe('CommenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommenterService = TestBed.get(CommenterService);
    expect(service).toBeTruthy();
  });
});
