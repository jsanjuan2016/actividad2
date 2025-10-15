import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PicsumService } from './picsum.service';

describe('PicsumService', () => {
  let service: PicsumService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(PicsumService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('PicsumService should be created', () => {
    expect(service).toBeTruthy();
  });
  it('HttpClient should be created', () => {
    expect(httpClient).toBeTruthy();
  });  
});
