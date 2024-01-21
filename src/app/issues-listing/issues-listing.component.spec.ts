import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesListingComponent } from './issues-listing.component';

describe('IssuesListingComponent', () => {
  let component: IssuesListingComponent;
  let fixture: ComponentFixture<IssuesListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesListingComponent]
    });
    fixture = TestBed.createComponent(IssuesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
