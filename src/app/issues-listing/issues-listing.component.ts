import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues-listing',
  templateUrl: './issues-listing.component.html',
  styleUrls: ['./issues-listing.component.scss'],
})
export class IssuesListingComponent {
  tableHeaders = [
    { name: 'Created On', value: 'created_at', width: '10%', isSortable: true },
    { name: 'Updated On', value: 'updated_at', width: '10%' },
    { name: 'Title', width: '80%', value: 'title' },
  ];

  tableData: any[] = [
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
    {
      title: 'Test',
      created_at: 'Test',
      updated_at: 'Test',
    },
  ];

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/landing-page']);
  }
}
