import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS8TreatedComponent } from './diary-s8-treated.component';

describe('DiaryS8TreatedComponent', () => {
  let component: DiaryS8TreatedComponent;
  let fixture: ComponentFixture<DiaryS8TreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS8TreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS8TreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
