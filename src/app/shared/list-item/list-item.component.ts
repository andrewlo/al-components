import { Component, Input } from '@angular/core';

import { ListItem } from '../../types/list-item';

@Component({
  selector: 'al-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() item: ListItem;
}
