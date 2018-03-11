import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai12TwowaybindingComponent } from './bai12-twowaybinding.component';

describe('Bai12TwowaybindingComponent', () => {
  let component: Bai12TwowaybindingComponent;
  let fixture: ComponentFixture<Bai12TwowaybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai12TwowaybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai12TwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
