import { TestBed } from '@angular/core/testing';

import { NetmessagesService } from './netmessages.service';

describe('NetmessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetmessagesService = TestBed.get(NetmessagesService);
    expect(service).toBeTruthy();
  });
});
