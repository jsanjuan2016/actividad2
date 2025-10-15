import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Galeria } from './galeria';

describe('Galeria', () => {
  let component: Galeria;
  let fixture: ComponentFixture<Galeria>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galeria],
      providers: [HttpClient, HttpHandler, provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galeria);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
