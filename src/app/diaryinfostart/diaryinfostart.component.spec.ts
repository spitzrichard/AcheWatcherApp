import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryinfostartComponent } from './diaryinfostart.component';

describe('DiaryinfostartComponent', () => {
  let component: DiaryinfostartComponent;
  let fixture: ComponentFixture<DiaryinfostartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryinfostartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryinfostartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
