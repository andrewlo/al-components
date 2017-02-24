import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() disabled = false;

  @Output() onClick = new EventEmitter();
}
