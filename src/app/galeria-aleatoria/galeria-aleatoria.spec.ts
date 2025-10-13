import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaAleatoria } from './galeria-aleatoria';

describe('GaleriaAleatoria', () => {
  let component: GaleriaAleatoria;
  let fixture: ComponentFixture<GaleriaAleatoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaAleatoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaAleatoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
