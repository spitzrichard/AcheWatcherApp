import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDiaryS1TimeComponent } from './old-diary-s1-time.component';

describe('OldDiaryS1TimeComponent', () => {
  let component: OldDiaryS1TimeComponent;
  let fixture: ComponentFixture<OldDiaryS1TimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDiaryS1TimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDiaryS1TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
