import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GaleriaPaginada } from './galeria-paginada';
import { PicsumService } from '../services/picsum.service';
import { of } from 'rxjs';

describe('GaleriaPaginada', () => {
  let component: GaleriaPaginada;
  let fixture: ComponentFixture<GaleriaPaginada>;
  let mockPicsumService: jasmine.SpyObj<PicsumService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PicsumService', ['getImageInfo']);

    await TestBed.configureTestingModule({
      imports: [GaleriaPaginada, RouterTestingModule],
      providers: [
        { provide: PicsumService, useValue: spy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaPaginada);
    component = fixture.componentInstance;
    mockPicsumService = TestBed.inject(PicsumService) as jasmine.SpyObj<PicsumService>;
    
    // Mock del servicio
    mockPicsumService.getImageInfo.and.returnValue(
      of({ 
        id: '1018',
        author: 'Test Author',
        width: 300,
        height: 200,
        url: 'https://picsum.photos/id/1018/info',
        download_url: 'https://picsum.photos/id/1018/300/200'
      })
    );
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first page', () => {
    expect(component.currentPage).toBe(1);
    expect(component.photos.length).toBe(component.itemsPerPage);
  });

  it('should calculate total pages correctly', () => {
    const expectedTotalPages = Math.ceil(component.allPhotos.length / component.itemsPerPage);
    expect(component.totalPages).toBe(expectedTotalPages);
  });

  it('should navigate to next page', () => {
    const initialPage = component.currentPage;
    component.goToNextPage();
    expect(component.currentPage).toBe(initialPage + 1);
  });

  it('should navigate to previous page', () => {
    component.goToPage(2); // Ir a la página 2 primero
    component.goToPreviousPage();
    expect(component.currentPage).toBe(1);
  });

  it('should not go to page less than 1', () => {
    component.goToPage(0);
    expect(component.currentPage).toBe(1);
  });

  it('should not go to page greater than total pages', () => {
    component.goToPage(component.totalPages + 1);
    expect(component.currentPage).toBe(1); // Should remain at current page
  });

  it('should return correct hasPreviousPage status', () => {
    expect(component.hasPreviousPage).toBeFalse();
    component.goToPage(2);
    expect(component.hasPreviousPage).toBeTrue();
  });

  it('should return correct hasNextPage status', () => {
    expect(component.hasNextPage).toBeTrue();
    component.goToLastPage();
    expect(component.hasNextPage).toBeFalse();
  });
});