import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues-listing',
  templateUrl: './issues-listing.component.html',
  styleUrls: ['./issues-listing.component.scss']
})
export class IssuesListingComponent {

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/landing-page'])
  }
}
