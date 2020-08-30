import { TestBed } from '@angular/core/testing';

import { NgxCollapseRqService } from './ngx-collapse-rq.service';

describe('NgxCollapseRqService', () => {
  let service: NgxCollapseRqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCollapseRqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
