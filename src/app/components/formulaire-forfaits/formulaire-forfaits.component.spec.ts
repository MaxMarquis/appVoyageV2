import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireForfaitsComponent } from './formulaire-forfaits.component';

describe('FormulaireForfaitsComponent', () => {
  let component: FormulaireForfaitsComponent;
  let fixture: ComponentFixture<FormulaireForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
