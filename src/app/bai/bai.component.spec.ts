import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiComponent } from './bai.component';

describe('BaiComponent', () => {
  let component: BaiComponent;
  let fixture: ComponentFixture<BaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
