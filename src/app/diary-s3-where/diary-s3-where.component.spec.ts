import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS3WhereComponent } from './diary-s3-where.component';

describe('DiaryS3WhereComponent', () => {
  let component: DiaryS3WhereComponent;
  let fixture: ComponentFixture<DiaryS3WhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS3WhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS3WhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
