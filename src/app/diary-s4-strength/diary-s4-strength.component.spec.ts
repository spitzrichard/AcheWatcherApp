import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS4StrengthComponent } from './diary-s4-strength.component';

describe('DiaryS4StrengthComponent', () => {
  let component: DiaryS4StrengthComponent;
  let fixture: ComponentFixture<DiaryS4StrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS4StrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS4StrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
