import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDiaryS4TreatedComponent } from './old-diary-s4-treated.component';

describe('OldDiaryS4TreatedComponent', () => {
  let component: OldDiaryS4TreatedComponent;
  let fixture: ComponentFixture<OldDiaryS4TreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDiaryS4TreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDiaryS4TreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
