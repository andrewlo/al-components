import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() show: boolean;

  @Output() close = new EventEmitter();
}
