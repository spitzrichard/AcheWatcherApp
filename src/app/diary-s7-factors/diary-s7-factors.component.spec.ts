import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS7FactorsComponent } from './diary-s7-factors.component';

describe('DiaryS7FactorsComponent', () => {
  let component: DiaryS7FactorsComponent;
  let fixture: ComponentFixture<DiaryS7FactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS7FactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS7FactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
