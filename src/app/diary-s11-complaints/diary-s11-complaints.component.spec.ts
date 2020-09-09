import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS11ComplaintsComponent } from './diary-s11-complaints.component';

describe('DiaryS11ComplaintsComponent', () => {
  let component: DiaryS11ComplaintsComponent;
  let fixture: ComponentFixture<DiaryS11ComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS11ComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS11ComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
