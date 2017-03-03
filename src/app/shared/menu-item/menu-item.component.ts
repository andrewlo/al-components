import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() label: string;

  @Input() icon: string;

  @Input() size = 'medium';

  @Output() onClick = new EventEmitter();
}
