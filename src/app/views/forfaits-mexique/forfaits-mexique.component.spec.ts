import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsMexiqueComponent } from './forfaits-mexique.component';

describe('ForfaitsMexiqueComponent', () => {
  let component: ForfaitsMexiqueComponent;
  let fixture: ComponentFixture<ForfaitsMexiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsMexiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsMexiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
