import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai58ContactDetailComponent } from './bai58-contact-detail.component';

describe('Bai58ContactDetailComponent', () => {
  let component: Bai58ContactDetailComponent;
  let fixture: ComponentFixture<Bai58ContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai58ContactDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai58ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
