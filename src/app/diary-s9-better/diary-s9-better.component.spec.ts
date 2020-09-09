import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS9BetterComponent } from './diary-s9-better.component';

describe('DiaryS9BetterComponent', () => {
  let component: DiaryS9BetterComponent;
  let fixture: ComponentFixture<DiaryS9BetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS9BetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS9BetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
