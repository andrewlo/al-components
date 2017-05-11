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

  @Input() fillWidth = false;

  @Output() onClick = new EventEmitter();

  getClasses(): string {
    const classes: string[] = [this.bgColorClass];

    if (this.fillWidth) {
      classes.push('fill-width');
    }

    return classes.join(' ');
  }
}
