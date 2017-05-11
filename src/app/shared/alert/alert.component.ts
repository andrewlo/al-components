import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'al-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnChanges {
  @Input() heading: string;

  @Input() showHeading = true;

  @Input() type: string;

  @Input() shadow = false;

  @Output() close = new EventEmitter();

  ngOnChanges() {
    this.heading = this.heading || this.type;
  }

  getClasses(): string {
    const classes: string[] = [this.type];

    if (this.shadow) {
      classes.push('shadow');
    }

    return classes.join(' ');
  }
}
