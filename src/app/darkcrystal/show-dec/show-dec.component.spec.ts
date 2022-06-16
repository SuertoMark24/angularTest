import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecComponent } from './show-dec.component';

describe('ShowDecComponent', () => {
  let component: ShowDecComponent;
  let fixture: ComponentFixture<ShowDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
