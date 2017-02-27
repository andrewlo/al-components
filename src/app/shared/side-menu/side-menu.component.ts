import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  @Input() show: boolean;

  @Output() close = new EventEmitter();
}
