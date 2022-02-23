import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAssuranceComponent } from './charts-assurance.component';

describe('ChartsAssuranceComponent', () => {
  let component: ChartsAssuranceComponent;
  let fixture: ComponentFixture<ChartsAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
