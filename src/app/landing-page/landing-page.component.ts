import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  currentPage: number = 1;

  constructor(private router: Router) { }

  pagChanged(page: number) {
    this.currentPage = page;
  }

  navigateToIssues() {
    this.router.navigate(['/issues']);
  }
}
