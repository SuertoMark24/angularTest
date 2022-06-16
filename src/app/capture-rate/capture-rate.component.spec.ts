import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureRateComponent } from './capture-rate.component';

describe('CaptureRateComponent', () => {
  let component: CaptureRateComponent;
  let fixture: ComponentFixture<CaptureRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
