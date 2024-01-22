import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Header {
  name: string;
  value: string;
  width?: string;
  isSortable?: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() headers: Header[] = [];
  @Input() rows: any[] = [];
  @Output() sortChanged: EventEmitter<{ column: string; direction: 'asc' | 'desc' }> = new EventEmitter<{ column: string; direction: 'asc' | 'desc' }>();

  private currentSortColumn: string = '';
  private currentSortDirection: 'asc' | 'desc' = 'asc';

  isAscendingOrder(header: Header): boolean {
    return this.isSorted(header.value) && this.getSortDirection(header.value) === 'asc'
  }

  handleSorting(header: Header): void {
    if (!header.isSortable) {
      return
    }

    const columnKey = header.value;

    if (this.currentSortColumn === columnKey) {
      this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortDirection = 'asc';
    }

    this.currentSortColumn = columnKey;
    this.sortChanged.emit({ column: columnKey, direction: this.currentSortDirection });
  }

  isSorted(columnKey: string): boolean {
    return this.currentSortColumn === columnKey;
  }

  getSortDirection(columnKey: string): 'asc' | 'desc' | null {
    return this.isSorted(columnKey) ? this.currentSortDirection : null;
  }

}
