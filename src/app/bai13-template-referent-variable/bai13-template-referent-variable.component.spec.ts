import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai13TemplateReferentVariableComponent } from './bai13-template-referent-variable.component';

describe('Bai13TemplateReferentVariableComponent', () => {
  let component: Bai13TemplateReferentVariableComponent;
  let fixture: ComponentFixture<Bai13TemplateReferentVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai13TemplateReferentVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai13TemplateReferentVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
