import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai53SignupComponent } from './bai53-signup.component';

describe('Bai53SignupComponent', () => {
  let component: Bai53SignupComponent;
  let fixture: ComponentFixture<Bai53SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai53SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai53SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
