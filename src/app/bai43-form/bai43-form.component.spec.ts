import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai43FormComponent } from './bai43-form.component';

describe('Bai43FormComponent', () => {
  let component: Bai43FormComponent;
  let fixture: ComponentFixture<Bai43FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai43FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai43FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
