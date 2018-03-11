import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai14StylebindingClassbindingComponent } from './bai14-stylebinding-classbinding.component';

describe('Bai14StylebindingClassbindingComponent', () => {
  let component: Bai14StylebindingClassbindingComponent;
  let fixture: ComponentFixture<Bai14StylebindingClassbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai14StylebindingClassbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai14StylebindingClassbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
