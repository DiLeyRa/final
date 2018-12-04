import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQrComponent } from './code-qr.component';

describe('CodeQrComponent', () => {
  let component: CodeQrComponent;
  let fixture: ComponentFixture<CodeQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
