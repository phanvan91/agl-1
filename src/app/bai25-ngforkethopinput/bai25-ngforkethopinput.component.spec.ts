import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai25NgforkethopinputComponent } from './bai25-ngforkethopinput.component';

describe('Bai25NgforkethopinputComponent', () => {
  let component: Bai25NgforkethopinputComponent;
  let fixture: ComponentFixture<Bai25NgforkethopinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai25NgforkethopinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai25NgforkethopinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
