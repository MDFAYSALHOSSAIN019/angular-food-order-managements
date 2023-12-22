import { TestBed } from '@angular/core/testing';

import { AdminDataViewService } from './admin-data-view.service';

describe('AdminDataViewService', () => {
  let service: AdminDataViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDataViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
