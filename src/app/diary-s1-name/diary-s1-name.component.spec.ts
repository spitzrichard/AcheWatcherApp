import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS1NameComponent } from './diary-s1-name.component';

describe('DiaryS1NameComponent', () => {
  let component: DiaryS1NameComponent;
  let fixture: ComponentFixture<DiaryS1NameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS1NameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS1NameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
