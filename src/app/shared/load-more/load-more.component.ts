import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css'],
})
export class LoadMoreComponent {
  @Input() loading = false;

  @Output() load = new EventEmitter();
}
