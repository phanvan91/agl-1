import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai11XulitextinputComponent } from './bai11-xulitextinput.component';

describe('Bai11XulitextinputComponent', () => {
  let component: Bai11XulitextinputComponent;
  let fixture: ComponentFixture<Bai11XulitextinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai11XulitextinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai11XulitextinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
