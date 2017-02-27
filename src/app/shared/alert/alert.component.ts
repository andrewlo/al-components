import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string;

  @Input() heading: string;

  @Input() type: string;

  @Output() close = new EventEmitter();

  ngOnChanges() {
    this.heading = this.heading || this.type;
  }
}
