import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryinfoendComponent } from './diaryinfoend.component';

describe('DiaryinfoendComponent', () => {
  let component: DiaryinfoendComponent;
  let fixture: ComponentFixture<DiaryinfoendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryinfoendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryinfoendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
