import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsTableComponent } from './forfaits-table.component';

describe('ForfaitsTableComponent', () => {
  let component: ForfaitsTableComponent;
  let fixture: ComponentFixture<ForfaitsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
