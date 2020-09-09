import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDiaryS5OtherComponent } from './old-diary-s5-other.component';

describe('OldDiaryS5OtherComponent', () => {
  let component: OldDiaryS5OtherComponent;
  let fixture: ComponentFixture<OldDiaryS5OtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDiaryS5OtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDiaryS5OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
