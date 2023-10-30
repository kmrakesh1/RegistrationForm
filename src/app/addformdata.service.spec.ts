import { TestBed } from '@angular/core/testing';

import { AddformdataService } from './addformdata.service';

describe('AddformdataService', () => {
  let service: AddformdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddformdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
