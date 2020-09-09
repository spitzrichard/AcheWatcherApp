import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS10DonebeforeComponent } from './diary-s10-donebefore.component';

describe('DiaryS10DonebeforeComponent', () => {
  let component: DiaryS10DonebeforeComponent;
  let fixture: ComponentFixture<DiaryS10DonebeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS10DonebeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS10DonebeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
