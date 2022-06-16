import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDecComponent } from './add-edit-dec.component';

describe('AddEditDecComponent', () => {
  let component: AddEditDecComponent;
  let fixture: ComponentFixture<AddEditDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
