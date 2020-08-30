import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCollapseRqComponent } from './ngx-collapse-rq.component';

describe('NgxCollapseRqComponent', () => {
  let component: NgxCollapseRqComponent;
  let fixture: ComponentFixture<NgxCollapseRqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCollapseRqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCollapseRqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
