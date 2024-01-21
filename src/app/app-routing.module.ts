import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IssuesListingComponent } from './issues-listing/issues-listing.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'issues', component: IssuesListingComponent },
  { path: '**', redirectTo: 'landing-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
