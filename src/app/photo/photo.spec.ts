import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Photo } from './photo';

describe('Photo', () => {
  let component: Photo;
  let fixture: ComponentFixture<Photo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photo],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
