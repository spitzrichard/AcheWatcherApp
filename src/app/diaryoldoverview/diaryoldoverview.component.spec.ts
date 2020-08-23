import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryoldoverviewComponent } from './diaryoldoverview.component';

describe('DiaryoldoverviewComponent', () => {
  let component: DiaryoldoverviewComponent;
  let fixture: ComponentFixture<DiaryoldoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryoldoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryoldoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
