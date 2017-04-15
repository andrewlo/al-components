import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() heading: string;

  @Input() backRoute: string;

  @Output() openSideMenu = new EventEmitter();
}
