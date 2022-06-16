import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkcrystalComponent } from './darkcrystal.component';

describe('DarkcrystalComponent', () => {
  let component: DarkcrystalComponent;
  let fixture: ComponentFixture<DarkcrystalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkcrystalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkcrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
