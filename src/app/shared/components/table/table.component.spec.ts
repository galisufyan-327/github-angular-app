import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { TableComponent } from './table.component';

@Component({
  template: `<app-table [headers]="headers" [rows]="rows" [loading]="loading"></app-table>`
})
class TestHostComponent {
  headers = [
    { name: 'Name', value: 'name', isSortable: true },
    { name: 'Age', value: 'age', isSortable: true },
  ];
  rows = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
  ];
  loading = false;
}

describe('TableComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, TestHostComponent]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display headers and rows when not loading', () => {
    component.loading = false;
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('.inner-table tr'));
    const headerRow = fixture.debugElement.query(By.css('.thead'));

    expect(tableRows.length).toBe(component.rows.length);
    expect(headerRow).toBeTruthy();
  });

  it('should display loading message when loading', () => {
    component.loading = true;
    fixture.detectChanges();

    const loadingRow = fixture.debugElement.query(By.css('.inner-table tr'));

    expect(loadingRow.nativeElement.textContent).toContain('Loading...');
  });

  it('should display "No records found" message when there are no rows and not loading', () => {
    component.rows = [];
    component.loading = false;
    fixture.detectChanges();

    const noRecordsRow = fixture.debugElement.query(By.css('.inner-table tr'));

    expect(noRecordsRow.nativeElement.textContent).toContain('No records found.');
  });

});
