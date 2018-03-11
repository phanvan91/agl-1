import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai58ContactComponent } from './bai58-contact.component';

describe('Bai58ContactComponent', () => {
  let component: Bai58ContactComponent;
  let fixture: ComponentFixture<Bai58ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai58ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai58ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
