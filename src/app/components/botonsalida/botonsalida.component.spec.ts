import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsalidaComponent } from './botonsalida.component';

describe('BotonsalidaComponent', () => {
  let component: BotonsalidaComponent;
  let fixture: ComponentFixture<BotonsalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonsalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonsalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
