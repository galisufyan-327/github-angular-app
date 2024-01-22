import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GithubIssuesService } from './github-issues.service';
import { ColumnInterface } from 'src/interfaces/Column';

describe('GithubIssuesService', () => {
  let service: GithubIssuesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubIssuesService],
    });

    service = TestBed.inject(GithubIssuesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request with correct parameters', fakeAsync(() => {
    const perPage = 16;
    const page = 1;
    const sortedColumn: ColumnInterface = { column: 'created', direction: 'asc' };

    service.searchIssues({ perPage, page, sortedColumn }).subscribe();

    const req = httpMock.expectOne((request) => {
      return (
        request.method === 'GET' &&
        request.url === service['apiUrl'] && // accessing private property for testing
        request.params.get('q') === 'repo:angular/components' &&
        request.params.get('per_page') === perPage.toString() &&
        request.params.get('page') === page.toString() &&
        request.params.get('sort') === sortedColumn.column &&
        request.params.get('order') === sortedColumn.direction
      );
    });

    expect(req.request.method).toBe('GET');

    req.flush({}); // You can flush a response here if needed

    tick();
  }));

  it('should handle errors appropriately', fakeAsync(() => {
    const perPage = 16;
    const page = 1;
    const sortedColumn: ColumnInterface = { column: 'created', direction: 'asc' };

    service.searchIssues({ perPage, page, sortedColumn }).subscribe(
      () => fail('Should not succeed'),
      (error) => {
        // Handle the error here if needed
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne((request) => {
      return (
        request.method === 'GET' &&
        request.url === service['apiUrl'] && // accessing private property for testing
        request.params.get('q') === 'repo:angular/components' &&
        request.params.get('per_page') === perPage.toString() &&
        request.params.get('page') === page.toString() &&
        request.params.get('sort') === sortedColumn.column &&
        request.params.get('order') === sortedColumn.direction
      );
    });

    req.flush(null, { status: 500, statusText: 'Internal Server Error' });

    tick();
  }));
});
