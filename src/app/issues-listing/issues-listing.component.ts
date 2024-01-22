// issues-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubIssuesService } from './service/github-issues.service';
import { formatDate } from 'src/utils';
import { ColumnInterface } from 'src/interfaces/Column';
import { IssuesInterface } from 'src/interfaces/Issues';

@Component({
  selector: 'app-issues-listing',
  templateUrl: './issues-listing.component.html',
  styleUrls: ['./issues-listing.component.scss'],
})
export class IssuesListingComponent implements OnInit {
  currentPage = 1;
  sortedColumn: ColumnInterface = {};
  tableHeaders = [
    {
      name: 'Created On',
      value: 'created_at',
      sortingValue: 'created',
      width: '8%',
      isSortable: true,
    },
    { name: 'Updated On', value: 'updated_at', width: '8%' },
    { name: 'Title', width: '80%', value: 'title' },
  ];
  tableData: IssuesInterface[] = [];
  loading = false;

  constructor(
    private router: Router,
    private githubIssuesService: GithubIssuesService
  ) {}

  ngOnInit() {
    this.loadIssues();
  }

  navigateBack() {
    this.router.navigate(['/landing-page']);
  }

  handlePageChanged(page: number) {
    this.currentPage = page;
    this.loadIssues();
  }

  handleSortChange(sortedColumn: ColumnInterface) {
    this.sortedColumn = sortedColumn;
    this.loadIssues();
  }

  loadIssues() {
    this.loading = true;

    this.githubIssuesService
      .searchIssues({ page: this.currentPage, sortedColumn: this.sortedColumn })
      .subscribe(
        (data: { items: IssuesInterface[] }) => {
          this.tableData = this.mapIssues(data?.items) || [];
          this.loading = false;
        },
        (error: Error) => {
          console.error('Error loading issues:', error);
          this.loading = false;
        }
      );
  }

  mapIssues(items: any[]): IssuesInterface[] {
    return (
      items?.map((item: any) => ({
        title: item.title,
        created_at: formatDate(item.created_at),
        updated_at: formatDate(item.updated_at),
      })) || []
    );
  }
}
