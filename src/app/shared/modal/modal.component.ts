import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() show: boolean;

  @Output() close = new EventEmitter();

  onClick(event: Event) {
    // Prevent click from going to backdrop and closing the modal
    event.stopPropagation();
  }
}
