import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai58PageNotFoundComponent } from './bai58-page-not-found.component';

describe('Bai58PageNotFoundComponent', () => {
  let component: Bai58PageNotFoundComponent;
  let fixture: ComponentFixture<Bai58PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai58PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai58PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
