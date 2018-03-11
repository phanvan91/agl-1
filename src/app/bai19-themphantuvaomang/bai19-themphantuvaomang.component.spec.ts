import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai19ThemphantuvaomangComponent } from './bai19-themphantuvaomang.component';

describe('Bai19ThemphantuvaomangComponent', () => {
  let component: Bai19ThemphantuvaomangComponent;
  let fixture: ComponentFixture<Bai19ThemphantuvaomangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai19ThemphantuvaomangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai19ThemphantuvaomangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
