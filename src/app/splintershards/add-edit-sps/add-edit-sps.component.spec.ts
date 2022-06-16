import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSpsComponent } from './add-edit-sps.component';

describe('AddEditSpsComponent', () => {
  let component: AddEditSpsComponent;
  let fixture: ComponentFixture<AddEditSpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
