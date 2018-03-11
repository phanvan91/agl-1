import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agl1Component } from './agl-1.component';

describe('Agl1Component', () => {
  let component: Agl1Component;
  let fixture: ComponentFixture<Agl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
