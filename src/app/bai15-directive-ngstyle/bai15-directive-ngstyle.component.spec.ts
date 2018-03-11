import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai15DirectiveNgstyleComponent } from './bai15-directive-ngstyle.component';

describe('Bai15DirectiveNgstyleComponent', () => {
  let component: Bai15DirectiveNgstyleComponent;
  let fixture: ComponentFixture<Bai15DirectiveNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai15DirectiveNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai15DirectiveNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
