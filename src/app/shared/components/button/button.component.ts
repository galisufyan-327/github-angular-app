import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: string = 'primary';
  @Output() onclick: EventEmitter<Event> = new EventEmitter<Event>();
  
  handleClick(event: Event): void {
    this.onclick.emit(event);
  }

  getColor(): string {
    if (this.color === 'primary') {
      return 'var(--primaryColor)';
    } else if (this.color === 'info') {
      return 'var(--secondaryColor)';
    }
    
    return this.color;
  }
}
