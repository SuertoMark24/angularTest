import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpsComponent } from './show-sps.component';

describe('ShowSpsComponent', () => {
  let component: ShowSpsComponent;
  let fixture: ComponentFixture<ShowSpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
