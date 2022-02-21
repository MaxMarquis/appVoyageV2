import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormulaireForfaitComponent } from './dialog-formulaire-forfait.component';

describe('DialogFormulaireForfaitComponent', () => {
  let component: DialogFormulaireForfaitComponent;
  let fixture: ComponentFixture<DialogFormulaireForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormulaireForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormulaireForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
