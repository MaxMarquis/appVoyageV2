import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsParisComponent } from './forfaits-paris.component';

describe('ForfaitsParisComponent', () => {
  let component: ForfaitsParisComponent;
  let fixture: ComponentFixture<ForfaitsParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsParisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
