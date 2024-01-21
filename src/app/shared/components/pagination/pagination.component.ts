// pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalCount: number = 0;
  @Input() limit: number = 10;
  @Input() currentPage: number = 1;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.limit);
  }

  get currentRange(): string {
    const start = (this.currentPage - 1) * this.limit + 1;
    const end = Math.min(start + this.limit - 1, this.totalCount);
    return `${start}-${end} of ${this.totalCount}`;
  }

  get isMoveToFirstPageDisabled(): boolean {
    return this.currentPage === 1;
  }
  
  get isMoveOnePageBackwardDisabled(): boolean {
    return this.currentPage === 1;
  }
  
  get isMoveOnePageForwardDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }
  
  get isMoveToLastPageDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }

  moveToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }

  moveOnePageBackward(): void {
    this.moveToPage(this.currentPage - 1);
  }

  moveOnePageForward(): void {
    this.moveToPage(this.currentPage + 1);
  }

  moveToFirstPage(): void {
    this.moveToPage(1);
  }

  moveToLastPage(): void {
    this.moveToPage(this.totalPages);
  }
}
