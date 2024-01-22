import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColumnInterface } from 'src/interfaces/Column';

interface SearchInterface {
  perPage?: number;
  page: number;
  sortedColumn: ColumnInterface;
}

@Injectable({
  providedIn: 'root',
})
export class GithubIssuesService {
  private apiUrl: string = environment.githubApiUrl;

  constructor(private http: HttpClient) {}

  searchIssues({
    perPage = 16,
    page = 1,
    sortedColumn,
  }: SearchInterface): Observable<any> {
    let params = new HttpParams()
      .set('q', `repo:angular/components`)
      .set('per_page', perPage.toString())
      .set('page', page.toString());

    if (Object.keys(sortedColumn).length) {
      params = params
        .set('sort', sortedColumn.column || 'created')
        .set('order', sortedColumn.direction || 'asc');
    }

    return this.http.get(this.apiUrl, { params });
  }
}
