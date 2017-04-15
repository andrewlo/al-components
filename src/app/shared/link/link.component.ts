import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent {
  @Input() route: string;
}
