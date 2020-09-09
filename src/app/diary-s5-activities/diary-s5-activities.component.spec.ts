import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS5ActivitiesComponent } from './diary-s5-activities.component';

describe('DiaryS5ActivitiesComponent', () => {
  let component: DiaryS5ActivitiesComponent;
  let fixture: ComponentFixture<DiaryS5ActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS5ActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS5ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
