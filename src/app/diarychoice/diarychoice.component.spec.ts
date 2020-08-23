import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarychoiceComponent } from './diarychoice.component';

describe('DiarychoiceComponent', () => {
  let component: DiarychoiceComponent;
  let fixture: ComponentFixture<DiarychoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarychoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarychoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
