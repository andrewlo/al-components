import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css'],
})
export class PopOverComponent {
  @Input() show: boolean;

  @Input() backdrop = false;

  @Output() close = new EventEmitter();
}
