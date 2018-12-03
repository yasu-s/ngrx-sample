import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { MemoService } from './service';

describe('MemoService', () => {
  let http: HttpClient;
  let service: MemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        MemoService,
        { provide: HttpClient, useValue: { get: null } },
      ]
    });

    http    = TestBed.get(HttpClient);
    service = TestBed.get(MemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('findAll', () => {
    it('success', (done) => {
      // setup
      http.get = jasmine.createSpy().and.returnValue(of([]));

      // exercise
      service.findAll().subscribe(data => {
        // verify
        expect(data).toEqual([]);
        expect(http.get).toHaveBeenCalled();
        expect(http.get).toHaveBeenCalledWith('./assets/data.json');
        done();
      });
    });
  });
});
