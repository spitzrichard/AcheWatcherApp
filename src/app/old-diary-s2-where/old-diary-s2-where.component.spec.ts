import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDiaryS2WhereComponent } from './old-diary-s2-where.component';

describe('OldDiaryS2WhereComponent', () => {
  let component: OldDiaryS2WhereComponent;
  let fixture: ComponentFixture<OldDiaryS2WhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDiaryS2WhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDiaryS2WhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
