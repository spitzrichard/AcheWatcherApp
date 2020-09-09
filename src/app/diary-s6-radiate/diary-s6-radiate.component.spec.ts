import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS6RadiateComponent } from './diary-s6-radiate.component';

describe('DiaryS6RadiateComponent', () => {
  let component: DiaryS6RadiateComponent;
  let fixture: ComponentFixture<DiaryS6RadiateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS6RadiateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS6RadiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
