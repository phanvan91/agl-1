import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai17NgforComponent } from './bai17-ngfor.component';

describe('Bai17NgforComponent', () => {
  let component: Bai17NgforComponent;
  let fixture: ComponentFixture<Bai17NgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai17NgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai17NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
