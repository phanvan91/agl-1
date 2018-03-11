import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai16IfComponent } from './bai16-if.component';

describe('Bai16IfComponent', () => {
  let component: Bai16IfComponent;
  let fixture: ComponentFixture<Bai16IfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai16IfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai16IfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
