import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
})
export class BackdropComponent {
  @Input() show: boolean;

  @Input() darken = false;
}
