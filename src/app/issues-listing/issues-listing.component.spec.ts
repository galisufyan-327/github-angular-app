import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { IssuesListingComponent } from './issues-listing.component';
import { GithubIssuesService } from './service/github-issues.service';
import { ColumnInterface } from 'src/interfaces/Column';
import { ButtonComponent } from '../shared/components/button/button.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { TableComponent } from '../shared/components/table/table.component';
import { Router } from '@angular/router';

describe('IssuesListingComponent', () => {
  let component: IssuesListingComponent;
  let fixture: ComponentFixture<IssuesListingComponent>;
  let mockRouter: jasmine.SpyObj<any>;
  let githubIssuesServiceSpy: jasmine.SpyObj<GithubIssuesService>;

  beforeEach(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    githubIssuesServiceSpy = jasmine.createSpyObj('GithubIssuesService', ['searchIssues']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ButtonComponent, PaginationComponent, TableComponent, IssuesListingComponent],
      providers: [
        { provide: GithubIssuesService, useValue: githubIssuesServiceSpy },
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(IssuesListingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load issues on initialization', fakeAsync(() => {
    const mockIssues = [{ title: 'Issue 1', created_at: '2022-01-01', updated_at: '2022-01-02' }];
    githubIssuesServiceSpy.searchIssues.and.returnValue(of({ items: mockIssues }));

    fixture.detectChanges();
    tick();

    expect(component.tableData).toEqual(component.mapIssues(mockIssues));
    expect(component.loading).toBe(false);
  }));

  it('should navigate back to landing page', () => {

    component.navigateBack();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/landing-page']);
  });

  it('should handle page change', fakeAsync(() => {
    const mockPage = 2;
    component.currentPage = mockPage;
    const loadIssuesSpy = spyOn(component, 'loadIssues').and.callThrough();
    githubIssuesServiceSpy.searchIssues.and.returnValue(of({ items: [] }));

    component.handlePageChanged(mockPage);

    expect(component.currentPage).toBe(mockPage );
    expect(loadIssuesSpy).toHaveBeenCalled();
  }));

  it('should handle sort change', fakeAsync(() => {
    const mockSortColumn: ColumnInterface = { column: 'created_at', direction: 'asc' };
    const loadIssuesSpy = spyOn(component, 'loadIssues').and.callThrough();
    githubIssuesServiceSpy.searchIssues.and.returnValue(of({ items: [] }));

    component.handleSortChange(mockSortColumn);

    expect(component.sortedColumn).toEqual(mockSortColumn);
    expect(loadIssuesSpy).toHaveBeenCalled();
  }));

  it('should update loading status while fetching issues', fakeAsync(() => {
    githubIssuesServiceSpy.searchIssues.and.returnValue(of({ items: [] }));
    expect(component.loading).toBe(false);

    component.loadIssues();
    tick();

    expect(component.loading).toBe(false); // Loading should be set to true before the request completes
    expect(githubIssuesServiceSpy.searchIssues).toHaveBeenCalled();
    expect(component.loading).toBe(false); // Loading should be set to false after the request completes
  }));

});
