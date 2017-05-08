import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  @Input() disabled = false;

  @Input() loading = false;

  @Input() bgColorClass = 'bg-green';

  @Input() iconClass = 'fa-plus';

  @Output() onClick = new EventEmitter();
}
