import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai33BuildpipeComponent } from './bai33-buildpipe.component';

describe('Bai33BuildpipeComponent', () => {
  let component: Bai33BuildpipeComponent;
  let fixture: ComponentFixture<Bai33BuildpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai33BuildpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai33BuildpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
