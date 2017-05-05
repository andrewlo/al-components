import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() disabled = false;

  @Input() loading = false;

  @Input() type: string;

  @Input() bgColorClass = 'bg-green';

  @Output() onClick = new EventEmitter();
}
