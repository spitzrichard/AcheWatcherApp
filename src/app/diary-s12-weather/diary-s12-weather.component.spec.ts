import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryS12WeatherComponent } from './diary-s12-weather.component';

describe('DiaryS12WeatherComponent', () => {
  let component: DiaryS12WeatherComponent;
  let fixture: ComponentFixture<DiaryS12WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryS12WeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryS12WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
