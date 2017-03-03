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

  @Output() close = new EventEmitter();

  ngOnChanges() {
    this.heading = this.heading || this.type;
  }
}
