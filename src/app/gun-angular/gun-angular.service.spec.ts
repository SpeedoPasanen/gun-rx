import { TestBed, inject } from '@angular/core/testing';

import { GunAngularService } from './gun-angular.service';

describe('GunAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GunAngularService]
    });
  });

  it('should be created', inject([GunAngularService], (service: GunAngularService) => {
    expect(service).toBeTruthy();
  }));
});
