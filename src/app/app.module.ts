import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IssuesListingComponent } from './issues-listing/issues-listing.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { TableComponent } from './shared/components/table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    IssuesListingComponent,
    ButtonComponent,
    PaginationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
