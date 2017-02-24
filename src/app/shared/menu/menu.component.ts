import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() heading: string;
}
