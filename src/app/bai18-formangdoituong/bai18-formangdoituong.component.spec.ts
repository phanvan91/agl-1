import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai18FormangdoituongComponent } from './bai18-formangdoituong.component';

describe('Bai18FormangdoituongComponent', () => {
  let component: Bai18FormangdoituongComponent;
  let fixture: ComponentFixture<Bai18FormangdoituongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai18FormangdoituongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai18FormangdoituongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
