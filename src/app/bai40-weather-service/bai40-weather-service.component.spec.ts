import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai40WeatherServiceComponent } from './bai40-weather-service.component';

describe('Bai40WeatherServiceComponent', () => {
  let component: Bai40WeatherServiceComponent;
  let fixture: ComponentFixture<Bai40WeatherServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai40WeatherServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai40WeatherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
