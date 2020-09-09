import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS13OtherComponent } from './diary-s13-other.component';

describe('DiaryS13OtherComponent', () => {
  let component: DiaryS13OtherComponent;
  let fixture: ComponentFixture<DiaryS13OtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS13OtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS13OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
