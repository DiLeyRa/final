import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamStatusComponent } from './dream-status.component';

describe('DreamStatusComponent', () => {
  let component: DreamStatusComponent;
  let fixture: ComponentFixture<DreamStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
