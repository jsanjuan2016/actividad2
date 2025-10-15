import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { GaleriaAleatoria } from './galeria-aleatoria';

describe('GaleriaAleatoria', () => {
  let component: GaleriaAleatoria;
  let fixture: ComponentFixture<GaleriaAleatoria>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaAleatoria],
      providers: [HttpClient, HttpHandler, provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaAleatoria);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
