import { Component, Input } from '@angular/core';

import { ListItem } from '../../types/list-item';

@Component({
  selector: 'al-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() heading: string;

  @Input() list: ListItem[];
}
