import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplintershardsComponent } from './splintershards.component';

describe('SplintershardsComponent', () => {
  let component: SplintershardsComponent;
  let fixture: ComponentFixture<SplintershardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplintershardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplintershardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
