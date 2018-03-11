import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai24InputComponent } from './bai24-input.component';

describe('Bai24InputComponent', () => {
  let component: Bai24InputComponent;
  let fixture: ComponentFixture<Bai24InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai24InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai24InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
