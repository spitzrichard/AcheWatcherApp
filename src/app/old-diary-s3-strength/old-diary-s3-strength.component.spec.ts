import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDiaryS3StrengthComponent } from './old-diary-s3-strength.component';

describe('OldDiaryS3StrengthComponent', () => {
  let component: OldDiaryS3StrengthComponent;
  let fixture: ComponentFixture<OldDiaryS3StrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDiaryS3StrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDiaryS3StrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
