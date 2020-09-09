import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS2TimeComponent } from './diary-s2-time.component';

describe('DiaryS2TimeComponent', () => {
  let component: DiaryS2TimeComponent;
  let fixture: ComponentFixture<DiaryS2TimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS2TimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS2TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
